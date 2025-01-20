import { IFood } from "@/types/IFood";

import FoodsCategories from "@/components/Nutrition/FoodCategories/FoodsCategories";
import FoodsFetcher from "@/components/Nutrition/FoodsFetcher/FoodsFetcher";
import "./FoodsPage.scss";
import slugify from "@/utils/slugify";
import { getAll } from "@/services/FetchServices";
import { IMeal } from "@/types/IMeal";

type Props = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | undefined };
};

export default function SearchFoodsPage({ params, searchParams }: Props) {
  let query = ""

  if (searchParams.category) {
    query = `?categorySlug=${searchParams.category}`

    if (searchParams.page) query += `&page=${searchParams.page}`
  }
  else if (searchParams.search) {
    query = `?slug=${searchParams.search}`

    if (searchParams.page) query += `&page=${searchParams.page}`
  }
  else {
    if (searchParams.page) query = `?page=${searchParams.page}`
  }

  return (
    <div className="all-foods-page">
      <FoodsCategories />
      <div className="foods">
        <FoodsFetcher mealSlug={params.mealSlug} dietSlug={params.dietSlug} query={query} />
      </div>
    </div>
  )
}
