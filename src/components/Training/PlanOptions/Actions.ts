"use server"

import { deleteOne } from "@/services/FetchServices"
import { revalidateTag } from "next/cache"

const url = process.env.API_BASE_URL + "training-plans/"

export async function deletePlan(slug: string) {
  await deleteOne(url + slug)
  revalidateTag("plans")
}