import { IMealFood } from "./IMealFood"

export interface IMeal {
  _id: string
  name: string
  carbs: number
  protein: number
  fat: number
  calories: number
  slug: string
  time: Date
  dietSlug: string
  userId: string
  foods: IMealFood[]
}