"use client"

import FormModalContainer from "@/components/UI/FormModalContainer/FormModalContainer";
import ModalLayoutElements from "@/components/UI/ModalLayoutElements/ModalLayoutElements";
import MealModalFormBody from "./MealModalFormBody";
import { useSearchParams } from "next/navigation";

interface Props {
  dietSlug: string
}

export default function MealModalForm({ dietSlug }: Props) {
  const searchParams = useSearchParams()
  const mealSlug = searchParams.get("meal")
  const title = mealSlug ? "Update Meal" : "Create Meal"

  return (
    <FormModalContainer route="nutrition">
      <ModalLayoutElements
        title={title}
        body={<MealModalFormBody mealSlug={mealSlug} dietSlug={dietSlug} />}
      />
    </FormModalContainer>
  )
}