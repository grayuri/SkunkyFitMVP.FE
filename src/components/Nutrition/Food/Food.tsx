"use client"

import { useParams, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image"
import { IFood } from "@/types/IFood"
import { DialogTrigger } from "@/components/UI/dialog";
import CreateButton from "@/components/UI/CreateButton/CreateButton"
import ScaleIcon from '@mui/icons-material/Scale';
import "./Food.scss"
import Link from "next/link";
import { deleteMealFood } from "../MealFoodOptions/Actions";

interface Props extends IFood {
  isAdded: boolean
}

export default function Food(props: Props) {
  const params = useParams()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const searchParam = searchParams.get("search")
  const page = searchParams.get("page")

  let foodModalFormLink = `${pathname}?name=${props.slug}`

  if (searchParam) foodModalFormLink += `&search=${searchParam}`
  if (searchParams.has("category")) foodModalFormLink += `&category=${props.categorySlug}`
  if (page) foodModalFormLink += `&page=${page}`

  return (
    <div className="food">
      <div className="image-container">
        <Image 
          src={props.pictureUrl} 
          alt="Food Image" 
          priority
          fill
        />
      </div>
      <div className="details">
        <div className="left">
          <h3>{props.name}</h3>
          <ul className="facts">
            <li>
              <div className="circle"></div>
              <span>{props.carbs}g Carbs</span>
            </li>
            <li>
              <div className="circle"></div>
              <span>{props.protein}g Protein</span>
            </li>
            <li>
              <div className="circle"></div>
              <span>{props.fat}g Fat</span>
            </li>
            <li>
              <div className="circle"></div>
              <span>{props.calories} Kcal</span>
            </li>
          </ul>
          <div className="serving-size">
            <ScaleIcon className="icon" />
            <span>{props.servingSizeGrams}g</span>
          </div>
        </div>

        <div className="right">
          {
            !props.isAdded
            ? (
              <DialogTrigger asChild>
                <Link href={foodModalFormLink} scroll={false}>
                  <CreateButton 
                    route="nutrition"
                    size="48px"
                    border={false}
                  />
                </Link>
              </DialogTrigger>
            )
            : (
              <form action={async () => await deleteMealFood(props.slug, params.mealSlug as string)}>
                <button>
                  <CreateButton 
                    route="nutrition"
                    size="48px"
                    toRemove={true}
                    border={false}
                  />
                </button>
              </form>
            )
          }
        </div>
      </div>
    </div>
  )
}
