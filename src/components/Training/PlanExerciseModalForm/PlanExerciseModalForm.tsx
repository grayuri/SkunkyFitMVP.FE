"use client"

import { useSearchParams } from "next/navigation";
import FormModalContainer from "@/components/UI/FormModalContainer/FormModalContainer";
import ModalLayoutElements from "@/components/UI/ModalLayoutElements/ModalLayoutElements";
import PlanExerciseModalFormBody from "./PlanExerciseModalFormBody";

interface Props {
  planSlug: string
}

export default function PlanExerciseModalForm({ planSlug }: Props) {
  const searchParams = useSearchParams()
  const exerciseSlug = searchParams.get("exercise")

  return (
    <FormModalContainer route="training">
      <ModalLayoutElements
        title={"Update Exercise"}
        body={<PlanExerciseModalFormBody trainingPlanSlug={planSlug} exerciseSlug={exerciseSlug} />}
      />
    </FormModalContainer>
  )
}