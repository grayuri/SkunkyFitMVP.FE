import ExercisesTabs from "@/components/Training/ExercisesTabs/ExercisesTabs";
import Breadcrumb from "@/components/UI/Breadcrumb/Breadcrumb";
import SearchPageLayout from "@/components/UI/SearchPageLayout/SearchPageLayout";

export default function ExercisesPageLayout({ children, params }: any) {
  return (
    <SearchPageLayout object="exercise" route="training">
      <Breadcrumb
        links={[
          { href: "/lab/training/", name: "All Plans" },
          { href: `/lab/training/${params.planSlug}`, name: "Plan" }
        ]}
        route="training"
      > Exercises </Breadcrumb>
      {/* <ExercisesTabs /> */}
      { children }
    </SearchPageLayout>
  )
}