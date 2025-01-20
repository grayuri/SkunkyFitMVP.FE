import { getOne } from "@/services/FetchServices";
import PlanDetails from "../PlanDetails/PlanDetails";
import PlanExercisesList from "../PlanExercisesList/PlanExercisesList";
import { ITrainingPlan } from "@/types/ITrainingPlan";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function PlanFetcher({ planSlug }: { planSlug: string }) {
  const plan = await getOne<ITrainingPlan>(`${process.env.API_BASE_URL}training-plans/${planSlug}`, { 
    next: { 
      tags: ["plans"],
      revalidate: 1800
    }
  })

  //@ts-ignore
  if (plan.message && plan.statusCode) notFound()

  return (
    <>
      <section className="top-section">
        <Image src={plan.bannerUrl} fill alt="Plan Banner" priority className="banner" />
        <div className="dark-layer" />
        <PlanDetails 
          burnedCaloriesTotal={plan.burnedCaloriesTotal}
          exercisesTotal={plan.exercisesTotal}
          timeTotal={plan.timeTotal}
          setsTotal={plan.setsTotal}
          targetedMuscles={plan.targetedMuscles}
        />
      </section>

      <section className="content">
        <h2>{plan.name}</h2>
        <PlanExercisesList planExercises={plan.exercises} planSlug={planSlug} />
      </section>
    </>
  )
}
