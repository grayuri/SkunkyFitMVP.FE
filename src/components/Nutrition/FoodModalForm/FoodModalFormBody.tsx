"use client"

import { useForm } from "react-hook-form";
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod";
import { CancelButton, ModalActionButton } from "@/components/UI/ModalFormButtons/ModalFormButtons";
import { IFood } from "@/types/IFood";
import FoodStats from "../FoodStats/FoodStats";
import FormField from "@/components/UI/FormField/FormField";
import { createMealFood } from "../MealFoodModalForm/Actions";
import closeModal from "@/utils/closeModal";
import { Spinner } from "@chakra-ui/react";

const foodSchema = z.object({
  quantity: z
  .coerce.number()
  .min(3, "Please, insert the quantity of your food."),
})

type foodSchema = z.infer<typeof foodSchema>

interface Props {
  food: IFood | undefined
  mealSlug: string
  dietSlug: string
  updateFoodStats: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FoodModalFormBody({ food, dietSlug, mealSlug, updateFoodStats }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<foodSchema>({ resolver: zodResolver(foodSchema) })
  
  async function onSubmit(data: foodSchema) {
    if (food) {
      const newMealFood = {
        ...food,
        dietSlug,
        mealSlug,
        servingSizeGrams: Number(data.quantity),
        userId: "123"
      }

      await createMealFood(newMealFood)
    }

    closeModal()
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
        <ModalActionButton isUpdate={false} isSubmitting={isSubmitting} />
      </div>
    </form>
  )
}