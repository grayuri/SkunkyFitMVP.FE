import { getAll } from "@/services/FetchServices";
import { IMeal } from "@/types/IMeal";
import { redirect } from "next/navigation";

export const dynamicParams = false

export async function generateStaticParams() {
  const { datas: meals } = await getAll<IMeal>(process.env.API_BASE_URL + "meals/", { 
    cache: "no-store"
  })

  return meals.map(meal => ({
    mealSlug: meal.slug,
    dietSlug: meal.dietSlug
  }))
}

export default function Foods({ params }: any) {
  redirect(`/lab/nutrition/${params.dietSlug}/${params.mealSlug}/foods`)
}