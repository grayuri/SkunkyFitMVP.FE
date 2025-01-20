"use server"

import { createOne, getOne } from "@/services/FetchServices"
import { IExercise } from "@/types/IExercise"
import { ITrainingPlanExercise } from "@/types/ITrainingPlanExercise"
import { revalidateTag } from "next/cache"

const url = process.env.API_BASE_URL + "training-plan-exercises/"

console.log(url)

export async function updatePlanExercise(data: any, slug: string, planSlug: string) {
  const { burnedCalories } = await createOne<any>(process.env.API_BASE_URL + "stats/exercise/", {
    body: JSON.stringify(data)
  })

  data.caloriesBurned = burnedCalories

  await fetch(`${url}/${slug}?trainingPlanSlug=${planSlug}`, {
    method: "PATCH",
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify(data)
  })

  revalidateTag("exercises")
  revalidateTag("plans")
}

export async function createPlanExercise(slug: string, data: any, planSlug: string) {
  const exercise = await getOne<IExercise>(`${process.env.API_BASE_URL}exercises/${slug}`)

  const newPlanExercise: Partial<ITrainingPlanExercise> = {
    ...exercise,
    trainingPlanSlug: planSlug,
    sets: data.sets,
    reps: data.reps,
    restTime: data.restTime,
    userId: "123",
  }

  const { burnedCalories } = await createOne<any>(process.env.API_BASE_URL + "stats/exercise/", {
    body: JSON.stringify(newPlanExercise)
  })

  newPlanExercise.caloriesBurned = burnedCalories

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify(newPlanExercise)
  })

  revalidateTag("exercises")
  revalidateTag("plans")
}