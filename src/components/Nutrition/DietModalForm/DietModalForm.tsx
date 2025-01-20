"use client"

import { useSearchParams } from "next/navigation";
import FormModalContainer from "@/components/UI/FormModalContainer/FormModalContainer";
import ModalLayoutElements from "@/components/UI/ModalLayoutElements/ModalLayoutElements";
import DietModalFormBody from "./DietModalFormBody";
import { IDiet } from "@/types/IDiet";

export default function DietModalForm() {
  const searchParams = useSearchParams()
  const dietSlug = searchParams.get("diet")
  const title = dietSlug ? "Update Diet" : "Create Diet"

  return (
    <FormModalContainer route="nutrition">
      <ModalLayoutElements
        title={title}
        body={<DietModalFormBody dietSlug={dietSlug} />}
      />
    </FormModalContainer>
  )
}