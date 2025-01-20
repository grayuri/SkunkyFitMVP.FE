"use server"

import { revalidateTag } from "next/cache"

const url = process.env.API_BASE_URL + "diets/"

export async function updateDiet(slug: string, formData: FormData) {
  await fetch(url + slug, {
    method: "PATCH",
    body: formData
  })

  revalidateTag("diets")
}

export async function createDiet(formData: FormData) {
  await fetch(url, {
    method: "POST",
    body: formData
  })

  revalidateTag("diets")
}