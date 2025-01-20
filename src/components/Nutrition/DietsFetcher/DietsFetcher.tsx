import { IDiet } from "@/types/IDiet"
import { getAll } from "@/services/FetchServices"
import DietsList from "../DietsList/DietsList"

export default async function DietsFetcher() {
  const { datas: diets } = await getAll<IDiet>(process.env.API_BASE_URL + "diets/", { 
    next: { 
      tags: ["diets"],
      revalidate: 1800
    } 
  })
  
  return (
    <>
      {
        diets && (
          <DietsList diets={diets} />
        )
      }
    </>
  )
}
