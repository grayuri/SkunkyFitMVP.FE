"use server"

import { revalidateTag } from "next/cache"

const url = process.env.API_BASE_URL + "training-plans/"

export async function updatePlan(slug: string, formData: FormData) {
  await fetch(url + slug, {
    method: "PATCH",
    body: formData
  })

  revalidateTag("plans")
}

export async function createPlan(formData: FormData) {
  await fetch(url, {
    method: "POST",
    body: formData
  })

  revalidateTag("plans")
}