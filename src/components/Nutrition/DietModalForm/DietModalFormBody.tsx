"use client"

import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

import FormField from "@/components/UI/FormField/FormField";
import checkIfFileIsImage from "@/utils/checkIfFileIsImage";
import FileUploadField from "@/components/UI/FileUploadField/FileUploadField";
import SelectField from "@/components/UI/SelectField/SelectField";
import { CancelButton, ModalActionButton } from "@/components/UI/ModalFormButtons/ModalFormButtons";
import closeModal from "@/utils/closeModal";
import { createDiet, updateDiet } from "./Actions";

const dietSchema = z.object({
  name: z
  .string()
  .min(3, "Please, insert the name of your diet."),

  dietObjective: z
  .enum(
    ["CUTTING", "BULKING", "MAINTEANENCE"], 
    { message: "Please, select a valid option." }
  ),

  banner: z
  .any()
  .refine((files) => files?.length !== 0, "Please, set a file image.")
  .refine((files) => checkIfFileIsImage(files[0]), "Please, only send JPG or PNG files.")
})

type DietFormData = z.infer<typeof dietSchema>

interface Props {
  dietSlug: string | null | undefined
}

export default function DietModalFormBody({ dietSlug }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DietFormData>({ resolver: zodResolver(dietSchema) })

  const isUpdateForm = dietSlug ? true : false

  async function onSubmit(data: DietFormData) {
    const FD = new FormData()

    FD.append("banner", data.banner[0])
    FD.append("name", data.name)
    FD.append("dietObjective", data.dietObjective)
    FD.append("userId", "1231234")

    if (isUpdateForm && dietSlug) await updateDiet(dietSlug, FD)
    else await createDiet(FD)
  
    closeModal()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="diet-form">
      <FormField 
        name="name"
        label="Name"
        placeholder="Skunky Smith"
        register={register}
        error={errors.name?.message}
      />
      <SelectField 
        name="dietObjective"
        label="Diet Objective"
        placeholder="Select Your Objective"
        register={register}
        error={errors.dietObjective?.message}
        options={[
          "Cutting",
          "Mainteanence",
          "Bulking"
        ]}
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