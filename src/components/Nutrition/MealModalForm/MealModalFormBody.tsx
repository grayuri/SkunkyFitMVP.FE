"use client"

import { revalidatePath } from "next/cache";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@/components/UI/FormField/FormField";
import { CancelButton, ModalActionButton } from "@/components/UI/ModalFormButtons/ModalFormButtons";
import { createMeal, updateMeal } from "./Actions";
import closeModal from "@/utils/closeModal";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const timeRegExp = /^(([0-1]{0,1}[0-9])|(2[0-3])):[0-5]{0,1}[0-9]$/

const mealSchema = z.object({
  name: z
  .string()
  .min(3, "Please, insert the name of your meal."),

  time: z
  .string()
  .refine(value => timeRegExp.test(value ?? ""), "Please, insert a valid hour and minute (h:m)."),
})

type MealFormData = z.infer<typeof mealSchema>

interface Props {
  mealSlug: string | null | undefined
  dietSlug: string
}

export default function MealModalFormBody({ mealSlug, dietSlug }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MealFormData>({ resolver: zodResolver(mealSchema) })

  const [_, startTransition] = useTransition()

  const router = useRouter()
  const isUpdateForm = mealSlug ? true : false

  async function onSubmit(data: MealFormData) {
    const formedData = {
      ...data,
      dietSlug,
      userId: "12234"
    }

    if (isUpdateForm && mealSlug) await updateMeal(mealSlug, formedData)
    else await createMeal(formedData)

    startTransition(router.refresh)
    closeModal()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="meal-form">
      <FormField 
        name="name"
        label="Name"
        placeholder="Skunky Smith"
        register={register}
        error={errors.name?.message}
      />
      <FormField 
        name="time"
        label="Time"
        placeholder="10:45"
        register={register}
        error={errors.time?.message}
      />
      <div className="buttons">
        <CancelButton />
        <ModalActionButton isUpdate={isUpdateForm} />
      </div>
    </form>
  )
}