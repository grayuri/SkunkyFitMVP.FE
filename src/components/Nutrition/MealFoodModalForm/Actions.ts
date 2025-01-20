"use server"

import { revalidateTag } from "next/cache"

const url = process.env.API_BASE_URL + "meal-foods/"

export async function updateMealFood(data: any) {
  await fetch(`${url}/${data.slug}?mealSlug=${data.mealSlug}`, {
    method: "PATCH",
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify(data)
  })

  revalidateTag("foods")
  revalidateTag("meals")
  revalidateTag("diets")
}

export async function createMealFood(data: any) {
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify(data)
  })

  revalidateTag("foods")
  revalidateTag("meals")
  revalidateTag("diets")
}