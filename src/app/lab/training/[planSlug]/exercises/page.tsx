import ExercisesList from "@/components/Training/ExercisesList/ExercisesList";
import ExercisesCategories from "@/components/Training/ExercisesCategories/ExercisesCategories";
import slugify from "@/utils/slugify";
import { ITrainingPlan } from "@/types/ITrainingPlan";
import { getAll } from "@/services/FetchServices";
import ExercisesFetcher from "@/components/Training/ExercisesFetcher/ExercisesFetcher";
import "./ExercisesPage.scss"

type Props = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | undefined };
};

export const dynamicParams = false

export async function generateStaticParams() {
  const { datas: plans } = await getAll<ITrainingPlan>(process.env.API_BASE_URL + "training-plans/", {
    cache: "no-store"
  })

  return plans.map(plan => ({
    planSlug: plan.slug
  }))
}

export default function SearchExercisesPage({ params, searchParams }: Props) {
  let query = ""

  if (searchParams.category) {
    query = `?muscleTargetedSlug=${searchParams.category}`

    if (searchParams.page) query += `&page=${searchParams.page}`
  }
  else if (searchParams.search) {
    query = `?slug=${slugify(searchParams.search)}`

    if (searchParams.page) query += `&page=${searchParams.page}`
  }
  else {
    if (searchParams.page) query = `?page=${searchParams.page}`
  }

  return (
    <div className="all-exercises-page">
      <ExercisesCategories />
      <div className="exercises">
        <ExercisesFetcher planSlug={params.planSlug} query={query} />
      </div>
    </div>
  )
}
