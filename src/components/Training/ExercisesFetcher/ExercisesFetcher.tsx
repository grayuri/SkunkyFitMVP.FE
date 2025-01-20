import { getAll, getOne } from "@/services/FetchServices"
import ExercisesList from "../ExercisesList/ExercisesList"
import { IExercise } from "@/types/IExercise"
import { ITrainingPlan } from "@/types/ITrainingPlan"
import { notFound } from "next/navigation"

interface Props {
  planSlug: string
  query: string
}

export default async function ExercisesFetcher({ planSlug, query }: Props) {
  const { datas: exercises, pages, total, results } = await getAll<IExercise>(`${process.env.API_BASE_URL}exercises${query}`, { 
    next: { 
      tags: ["exercises"]
    },
    cache: "no-store"
  })
  const plan = await getOne<ITrainingPlan>(`${process.env.API_BASE_URL}training-plans/${planSlug}`, { 
    next: { 
      tags: ["plans"],
      revalidate: 1800
    }
  })
  let exercisesAdded: string[] = []

  //@ts-ignore
  if (plan.message && plan.statusCode) notFound()
  
  if (plan && plan.exercises) exercisesAdded = plan.exercises.map(exercise => exercise.slug)

  return (
    <>
      {
        exercises && (
          <ExercisesList 
            exercises={exercises} 
            planSlug={planSlug} 
            exercisesAdded={exercisesAdded} 
            pages={pages} 
            total={total}
            results={results}
          />
        )
      }
    </>
  )
}
