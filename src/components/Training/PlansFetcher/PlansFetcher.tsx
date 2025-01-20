import { getAll } from "@/services/FetchServices"
import { ITrainingPlan } from "@/types/ITrainingPlan"
import PlansList from "../PlansList/PlansList"

export default async function PlansFetcher() {
  const { datas: plans } = await getAll<ITrainingPlan>(process.env.API_BASE_URL + "training-plans/", { 
    next: { 
      tags: ["plans"],
      revalidate: 1800
    } 
  })

  return (
    <>
      {
        plans && (
          <PlansList plans={plans} />
        )
      }
    </>
  )
}
