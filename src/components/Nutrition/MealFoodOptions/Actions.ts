"use server"

import closeModal from "@/utils/closeModal"
import { deleteOne } from "@/services/FetchServices"
import { revalidateTag } from "next/cache"

const url = process.env.API_BASE_URL + "meal-foods/"

export async function deleteMealFood(slug: string, mealSlug: string) {
  await deleteOne(`${url}/${slug}?mealSlug=${mealSlug}`)
  revalidateTag("foods")
  revalidateTag("meals")
  revalidateTag("diets")
}