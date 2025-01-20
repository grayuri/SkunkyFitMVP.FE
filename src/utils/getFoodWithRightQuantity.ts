import { IFood } from "@/types/IFood";
import { IMealFood } from "@/types/IMealFood";

export default function getFoodWithRightQuantity(value: string, food: IFood | IMealFood): IFood | IMealFood | void {
  if (value === "") return
    
  let quantity = Number(value)

  if (isNaN(quantity) || quantity === 0 || quantity < 1) return

  let quantityPercentage = quantity / food.servingSizeGrams

  const treatedFood = {
    ...food,
    servingSizeGrams: Number(quantity.toFixed(2)),
    carbs: Number((food.carbs * quantityPercentage).toFixed(2)),
    protein: Number((food.protein * quantityPercentage).toFixed(2)),
    fat: Number((food.fat * quantityPercentage).toFixed(2)),
    calories: Number((food.calories * quantityPercentage).toFixed(2)),
  }

  return treatedFood
}