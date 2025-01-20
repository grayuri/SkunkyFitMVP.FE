"use client"

import FormModalContainer from "@/components/UI/FormModalContainer/FormModalContainer";
import ModalLayoutElements from "@/components/UI/ModalLayoutElements/ModalLayoutElements";
import FoodModalFormBody from "./FoodModalFormBody";
import { useSearchParams } from "next/navigation";
import { getOne } from "@/services/FetchServices";
import { useEffect, useState } from "react";
import { IFood } from "@/types/IFood";
import getFoodWithRightQuantity from "@/utils/getFoodWithRightQuantity";

interface Props {
  dietSlug: string
  mealSlug: string
}

export default function FoodModalForm({ dietSlug, mealSlug }: Props) {
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
    async function getFood() {
      if (slug) {
        const data = await getOne<any>(`${process.env.API_BASE_URL}foods/${slug}`)
        setFood(data)
      }
    }
    getFood()

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