"use client"

import { useForm } from "react-hook-form";
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@/components/UI/FormField/FormField";
import { CancelButton, ModalActionButton } from "@/components/UI/ModalFormButtons/ModalFormButtons";
import { updateMealFood } from "./Actions";
import FoodStats from "../FoodStats/FoodStats";
import { IMealFood } from "@/types/IMealFood";
import closeModal from "@/utils/closeModal";
import { Spinner } from "@chakra-ui/react";

const mealFoodSchema = z.object({
  quantity: z
  .coerce.number()
  .min(3, "Please, insert the quantity of your food."),
})

type MealFoodFormData = z.infer<typeof mealFoodSchema>

interface Props {
  food: IMealFood | undefined
  mealFoodSlug: string | null | undefined
  mealSlug: string | null | undefined
  updateFoodStats: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function MealFoodModalFormBody({ food, mealSlug, mealFoodSlug, updateFoodStats }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MealFoodFormData>({ resolver: zodResolver(mealFoodSchema) })
  
  async function onSubmit(data: MealFoodFormData) {
    if (mealSlug && mealFoodSlug) {
      await updateMealFood({
        ...food,
        servingSizeGrams: data.quantity
      })
      closeModal()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="meal-food-form">
      {
        food 
        ? (
          <FoodStats 
            carbs={food.carbs}
            protein={food.protein}
            fat={food.fat}
            calories={food.calories}
          />
        )
        : (
          <Spinner size="xl" color="gray" />
        )
      }
      <FormField 
        name="quantity"
        label="Quantity (g)"
        placeholder="Quantity of the food in grams..."
        register={register}
        error={errors.quantity?.message}
        onChange={updateFoodStats}
      />
      <div className="buttons">
        <CancelButton />
        <ModalActionButton isUpdate={true} />
      </div>
    </form>
  )
}