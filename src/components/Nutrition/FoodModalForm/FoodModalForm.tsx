"use client"

import FormModalContainer from "@/components/UI/FormModalContainer/FormModalContainer";
import ModalLayoutElements from "@/components/UI/ModalLayoutElements/ModalLayoutElements";
import FoodModalFormBody from "./FoodModalFormBody";
import { useSearchParams } from "next/navigation";
import { getOne } from "@/services/FetchServices";
import { useEffect, useState } from "react";
import { IFood } from "@/types/IFood";
import getFoodWithRightQuantity from "@/utils/getFoodWithRightQuantity";
import closeModal from "@/utils/closeModal";

interface Props {
  dietSlug: string
  mealSlug: string
  foods: IFood[]
}

export default function FoodModalForm({ dietSlug, mealSlug, foods }: Props) {
  const [food, setFood] = useState<IFood>()
  const searchParams = useSearchParams()
  const slug = searchParams.get("name")

  function updateFoodStats(e: React.ChangeEvent<HTMLInputElement>) {
    if (food) {
      const treatedFood = getFoodWithRightQuantity(e.target.value, food)

      if (treatedFood) {
        setFood(treatedFood)
      }
    }
  }

  useEffect(() => {
    const currentFood = foods.find(food => food.slug === slug)

    if (!currentFood) closeModal()

    setFood(currentFood)
  },[slug])

  return (
    <FormModalContainer route="nutrition">
      <ModalLayoutElements
        title={"Add Food"}
        body={<FoodModalFormBody food={food} dietSlug={dietSlug} mealSlug={mealSlug} updateFoodStats={updateFoodStats} />}
      />
    </FormModalContainer>
  )
}