"use server"

import { revalidateTag } from "next/cache"

const url = process.env.API_BASE_URL + "meals/"

export async function updateMeal(slug: string, data: any) {
  await fetch(url + slug, {
    method: "PATCH",
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify(data)
  })

  revalidateTag("diets")
  revalidateTag("meals")
}

export async function createMeal(data: any) {
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify(data)
  })

  revalidateTag("diets")
  revalidateTag("meals")
}