"use server"

import { getOne, updateOne } from "@/services/FetchServices"
import { ITrainingPlan } from "@/types/ITrainingPlan"
import { ITrainingPlanExercise } from "@/types/ITrainingPlanExercise"
import moveElementsInsideAnArray from "@/utils/moveElementsInsideAnArray"
import { revalidateTag } from "next/cache"

export async function moveUp(planSlug: string, index: number) {
  const plan = await getOne<ITrainingPlan>("http://localhost:8000/api/v1/training-plans/" + planSlug , { 
    next: { 
      tags: ["plans"],
      revalidate: 1800
    }
  })

  const movedExercises = moveElementsInsideAnArray(plan.exercises, index, index - 1)

  await updateOne("http://localhost:8000/api/v1/training-plans/" + planSlug, {
    body: JSON.stringify({ exercises: movedExercises })
  })

  revalidateTag("plans")
}

export async function moveDown(planSlug: string, index: number) {
  const plan = await getOne<ITrainingPlan>("http://localhost:8000/api/v1/training-plans/" + planSlug , { 
    next: { 
      tags: ["plans"],
      revalidate: 1800
    }
  })

  const movedExercises = moveElementsInsideAnArray(plan.exercises, index, index + 1)
  
  await updateOne("http://localhost:8000/api/v1/training-plans/" + planSlug, {
    body: JSON.stringify({ exercises: movedExercises })
  })

  revalidateTag("plans")
}