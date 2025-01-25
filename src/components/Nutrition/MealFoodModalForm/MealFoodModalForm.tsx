"use client"

import FormModalContainer from "@/components/UI/FormModalContainer/FormModalContainer";
import ModalLayoutElements from "@/components/UI/ModalLayoutElements/ModalLayoutElements";
import MealFoodModalFormBody from "./MealFoodModalFormBody";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import getFoodWithRightQuantity from "@/utils/getFoodWithRightQuantity";
import { IMealFood } from "@/types/IMealFood";
import closeModal from "@/utils/closeModal";

export default function MealFoodModalForm({ foods }: { foods: IMealFood[] }) {
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
    const currentFood = foods.find(food => food.slug === mealFoodSlug)
    setFood(currentFood)

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