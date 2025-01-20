"use server"

import { deleteOne } from "@/services/FetchServices"
import { revalidateTag } from "next/cache"

const url = process.env.API_BASE_URL + "meals/"

export async function deleteMeal(slug: string) {
  await deleteOne(url + slug)
  revalidateTag("diets")
  revalidateTag("meals")
}