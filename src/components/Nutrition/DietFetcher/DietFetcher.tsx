import { IDiet } from "@/types/IDiet"
import { createOne, getOne } from "@/services/FetchServices"
import MacronutrientsCounter from "../MacronutrientsCounter/MacronutrientsCounter"
import MealsList from "../MealsList/MealsList"
import Image from "next/image"

export default async function DietFetcher({ dietSlug }: { dietSlug: string }) {
  const diet = await getOne<IDiet>(`${process.env.API_BASE_URL}diets/${dietSlug}`, { 
    next: { 
      tags: ["diets"],
      revalidate: 1800
    }
  })
  const dietStats = await createOne<any>(`${process.env.API_BASE_URL}stats/diet`, { 
    body: JSON.stringify({ dietObjective: diet.dietObjective }),
    next: { tags: ["diets"] } 
  })

  const dietMeals = diet.meals.map(meal => ({ 
    ...meal,
    time: new Date(meal.time)
  }))

  return (
    <>
      <section className="top-section">
        <Image src={diet.bannerUrl} fill alt="Diet Banner" className="banner" priority />
        <div className="dark-layer" />
        <MacronutrientsCounter {...diet} dietStats={dietStats} />
      </section>

      <section className="content">
        <h2>{diet.name}</h2>
        <MealsList meals={dietMeals} dietSlug={dietSlug} />
      </section>
    </>
  )
}
