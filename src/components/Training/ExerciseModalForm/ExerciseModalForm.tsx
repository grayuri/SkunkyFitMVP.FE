"use client"

import { useSearchParams } from "next/navigation";
import FormModalContainer from "@/components/UI/FormModalContainer/FormModalContainer";
import ModalLayoutElements from "@/components/UI/ModalLayoutElements/ModalLayoutElements";
import ExerciseModalFormBody from "./ExerciseModalFormBody";

interface Props {
  planSlug: string
}

export default function ExerciseModalForm({ planSlug }: Props) {
  const searchParams = useSearchParams()
  const exerciseSlug = searchParams.get("name")

  return (
    <FormModalContainer route="training">
      <ModalLayoutElements
        title={"Add Exercise"}
        body={<ExerciseModalFormBody planSlug={planSlug} slug={exerciseSlug} />}
      />
    </FormModalContainer>
  )
}