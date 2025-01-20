"use client"

import { IFood } from "@/types/IFood";
import Food from "../Food/Food";

import "./FoodsList.scss";
import { DialogBackdrop, DialogRoot } from "@/components/UI/dialog";
import { useRouter, useSearchParams } from "next/navigation";
import FoodModalForm from "../FoodModalForm/FoodModalForm";
import EmptyResponse from "@/components/UI/EmptyResponse/EmptyResponse";
import Pagination from "@/components/UI/Pagination/Pagination";
import getListResults from "@/utils/getListResults";

interface Props {
  foods: IFood[]
  mealSlug: string
  dietSlug: string
  foodsAdded: string[]
  pages: number
  total: number
  results: number
}

export default function FoodsList({ foods, dietSlug, mealSlug, foodsAdded, pages, results, total }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categorySlug = searchParams.get("category")
  const searchSlug = searchParams.get("search")
  const page = searchParams.get("page")

  let pageLink = `/lab/nutrition/${dietSlug}/${mealSlug}/foods`

  if (categorySlug) {
    pageLink += `?category=${categorySlug}`

    if (page) pageLink += `&page=${page}`
  }
  else if (searchSlug) {
    pageLink += `?search=${searchSlug}`

    if (page) pageLink += `&page=${page}`
  }
  else {
    if (page) pageLink += `?page=${page}`
  }

  return (
    <DialogRoot
      placement="center"
      motionPreset="slide-in-bottom"
      onExitComplete={() => router.push(pageLink, { scroll: false })}
    >
      <DialogBackdrop />
      <FoodModalForm dietSlug={dietSlug} mealSlug={mealSlug} />
      {
        foods.length > 0
        ? (
          <div className="list-container">
            <p className="results">
              {
                getListResults({
                  page: Number(page) || 1,
                  pages,
                  results,
                  total
                })
              }
            </p>
            <div className="foods-list">
              {
                foods.map(food => (
                  <Food key={food.slug} {...food} isAdded={foodsAdded.includes(food.slug)} />
                ))
              }
            </div>
            <Pagination total={pages} route="nutrition" pageLink={pageLink} />
          </div>
        )
        : (
          <EmptyResponse 
            type="nutrition"
            object="food"
            readonly={true}
          />
        )
      }
    </DialogRoot>
  )
}
