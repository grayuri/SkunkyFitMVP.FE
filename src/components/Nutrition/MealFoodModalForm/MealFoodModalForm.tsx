"use client"

import FormModalContainer from "@/components/UI/FormModalContainer/FormModalContainer";
import ModalLayoutElements from "@/components/UI/ModalLayoutElements/ModalLayoutElements";
import MealFoodModalFormBody from "./MealFoodModalFormBody";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import getFoodWithRightQuantity from "@/utils/getFoodWithRightQuantity";
import { IMealFood } from "@/types/IMealFood";
import { getOne } from "@/services/FetchServices";

export default function MealFoodModalForm() {
  const [food, setFood] = useState<IMealFood>()
  const searchParams = useSearchParams()
  const mealSlug = searchParams.get("meal")
  const mealFoodSlug = searchParams.get("mealFood")

  function updateFoodStats(e: React.ChangeEvent<HTMLInputElement>) {
    if (food) {
      const treatedFood = getFoodWithRightQuantity(e.target.value, food)

      if (treatedFood) {
        setFood(treatedFood as IMealFood)
      }
    }
  }

  useEffect(() => {
    async function getFood() {
      if (mealFoodSlug && mealSlug) {
        const data = await getOne<IMealFood>(`${process.env.API_BASE_URL}meal-foods/${mealFoodSlug}?mealSlug=${mealSlug}`)
        setFood(data)
      }
    }
    getFood()

  },[mealFoodSlug, mealSlug])

  return (
    <FormModalContainer route="nutrition">
      <ModalLayoutElements
        title={"Update Food"}
        body={<MealFoodModalFormBody food={food} mealFoodSlug={mealFoodSlug} mealSlug={mealSlug} updateFoodStats={updateFoodStats} />}
      />
    </FormModalContainer>
  )
}