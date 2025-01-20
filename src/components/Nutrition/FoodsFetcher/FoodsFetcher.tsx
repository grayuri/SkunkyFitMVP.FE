import { getAll, getOne } from "@/services/FetchServices"
import FoodsList from "../FoodsList/FoodsList"
import { IFood } from "@/types/IFood"
import { IMeal } from "@/types/IMeal"

interface Props {
  mealSlug: string
  dietSlug: string
  query: string
}

export default async function FoodsFetcher({ mealSlug, dietSlug, query }: Props) {
  const { datas: foods, pages, total, results } = await getAll<IFood>(`${process.env.API_BASE_URL}foods${query}`, { 
    next: { 
      tags: ["foods"]
    },
    cache: "no-store"
  })
  const meal = await getOne<IMeal>(`${process.env.API_BASE_URL}meals/${mealSlug}`, { next: { tags: ["meals"] } })
  let foodsAdded: string[] = []

  //@ts-ignore
  if (meal.message && meal.statusCode) notFound()

  if (meal && meal.foods) foodsAdded = meal.foods.map(food => food.slug)

  return (
    <>
      {
        foods && (
          <FoodsList 
            foods={foods} 
            mealSlug={mealSlug} 
            dietSlug={dietSlug} 
            foodsAdded={foodsAdded} 
            pages={pages} 
            total={total}
            results={results}
          />
        )
      }
    </>
  )
}
