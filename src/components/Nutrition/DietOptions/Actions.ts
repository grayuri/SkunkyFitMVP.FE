"use server"

import { deleteOne } from "@/services/FetchServices"
import { revalidateTag } from "next/cache"

const url = process.env.API_BASE_URL + "diets/"

export async function deleteDiet(slug: string) {
  await deleteOne(url + slug)
  revalidateTag("diets")
}