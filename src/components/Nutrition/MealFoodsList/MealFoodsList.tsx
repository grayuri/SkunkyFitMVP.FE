"use client"

import { IMealFood } from "@/types/IMealFood";
import Link from "next/link";

import CreateButton from "@/components/UI/CreateButton/CreateButton";
import MealFood from "../MealFood/MealFood";

import "./MealFoodsList.scss";

interface Props {
  mealFoods: IMealFood[]
  mealSlug: string
  dietSlug: string
}

export default function MealFoodsList({ mealFoods, mealSlug, dietSlug }: Props) {
  const foodsLink = `/lab/nutrition/${dietSlug}/${mealSlug}/foods`

  return (
    <div className="meal-foods-list">
      {
        mealFoods && (
          mealFoods.map(mealFood => (
            <MealFood key={mealFood.slug} {...mealFood} mealSlug={mealSlug} />
          ))
        )
      }
      <Link href={foodsLink} style={{ width: "fit-content" }}>
        <CreateButton size="48px" route="nutrition" border={true} />
      </Link>
    </div>
  )
}
