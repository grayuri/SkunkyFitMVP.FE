"use client"

import { useSearchParams } from "next/navigation";
import FormModalContainer from "@/components/UI/FormModalContainer/FormModalContainer";
import ModalLayoutElements from "@/components/UI/ModalLayoutElements/ModalLayoutElements";
import PlanModalFormBody from "./PlanModalFormBody";

export default function PlanModalForm() {
  const searchParams = useSearchParams()
  const trainingPlanSlug = searchParams.get("trainingPlan")
  const title = trainingPlanSlug ? "Update Plan" : "Create Plan"

  return (
    <FormModalContainer route="training">
      <ModalLayoutElements
        title={title}
        body={<PlanModalFormBody trainingPlanSlug={trainingPlanSlug} />}
      />
    </FormModalContainer>
  )
}