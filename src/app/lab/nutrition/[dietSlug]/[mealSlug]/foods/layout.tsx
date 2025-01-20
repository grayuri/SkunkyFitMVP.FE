import { BreadcrumbRoot, BreadcrumbCurrentLink, BreadcrumbLink } from "@/components/UI/breadcrumb";
import FoodsTabs from "@/components/Nutrition/FoodsTabs/FoodsTabs";
import SearchPageLayout from "@/components/UI/SearchPageLayout/SearchPageLayout";
import Breadcrumb from "@/components/UI/Breadcrumb/Breadcrumb";

export default function FoodsPageLayout({ children, params }: any) {
  return (
    <SearchPageLayout object="food" route="nutrition">
      <Breadcrumb
        links={[
          { href: "/lab/nutrition/", name: "All Diets" },
          { href: `/lab/nutrition/${params.dietSlug}`, name: "Diet" }
        ]}
        route="nutrition"
      > Foods </Breadcrumb>
      {/* <FoodsTabs /> */}
      { children }
    </SearchPageLayout>
  )
}