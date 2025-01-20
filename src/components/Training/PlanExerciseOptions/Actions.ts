"use server"

import { deleteOne } from "@/services/FetchServices"
import { revalidateTag } from "next/cache"

const url = process.env.API_BASE_URL + "training-plan-exercises/"

export async function deleteExercise(slug: string, planSlug: string) {
  await deleteOne(`${url + slug}?trainingPlanSlug=${planSlug}`)
  revalidateTag("plans")
  revalidateTag("exercises")
}