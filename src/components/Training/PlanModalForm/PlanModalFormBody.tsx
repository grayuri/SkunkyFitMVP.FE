"use client"

import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

import FormField from "@/components/UI/FormField/FormField";
import checkIfFileIsImage from "@/utils/checkIfFileIsImage";
import FileUploadField from "@/components/UI/FileUploadField/FileUploadField";
import { CancelButton, ModalActionButton } from "@/components/UI/ModalFormButtons/ModalFormButtons";
import closeModal from "@/utils/closeModal";
import { createPlan, updatePlan } from "./Actions";

const trainingPlanSchema = z.object({
  name: z
  .string()
  .min(3, "Please, insert the name of your training plan."),

  banner: z
  .any()
  .refine((files) => files?.length !== 0, "Please, set a file image.")
  .refine((files) => checkIfFileIsImage(files[0]), "Please, only send JPG or PNG files.")
})

type TrainingPlanFormData = z.infer<typeof trainingPlanSchema>

interface Props {
  trainingPlanSlug: string | null | undefined
}

export default function PlanModalFormBody({ trainingPlanSlug }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TrainingPlanFormData>({ resolver: zodResolver(trainingPlanSchema) })
  
  const isUpdateForm = trainingPlanSlug ? true : false

  async function onSubmit(data: TrainingPlanFormData) {
      const FD = new FormData()
  
      FD.append("banner", data.banner[0])
      FD.append("name", data.name)
      FD.append("userId", "1231234")
  
      if (isUpdateForm && trainingPlanSlug) await updatePlan(trainingPlanSlug, FD)
      else await createPlan(FD)
    
      closeModal()
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="training-plan-form">
      <FormField 
        name="name"
        label="Name"
        placeholder="Skunky Smith"
        register={register}
        error={errors.name?.message}
      />
      <FileUploadField 
        name="banner"
        label="Banner"
        register={register}
        accept={["image/png", "image/jpeg"]}
        error={errors.banner?.message?.toString()}
      />
      <div className="buttons">
        <CancelButton />
        <ModalActionButton isUpdate={isUpdateForm} />
      </div>
    </form>
  )
}