"use client"

import { useForm } from "react-hook-form";
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@/components/UI/FormField/FormField";
import { CancelButton, ModalActionButton } from "@/components/UI/ModalFormButtons/ModalFormButtons";
import { IExercise } from "@/types/IExercise";
import { getOne } from "@/services/FetchServices";
import closeModal from "@/utils/closeModal";
import { createPlanExercise } from "../PlanExerciseModalForm/Actions";

const planExerciseSchema = z.object({
  sets: z
  .coerce.number()
  .min(1, "Please, insert the quantity of sets for your exercise."),

  reps: z
  .coerce.number()
  .min(1, "Please, insert the quantity of reps for your exercise."),

  restTime: z
  .coerce.number()
  .min(1, "Please, insert the quantity of rest time for your exercise."),
})

type PlanExerciseFormData = z.infer<typeof planExerciseSchema>

interface Props {
  planSlug: string | null | undefined
  slug: string | null | undefined
}

export default function ExerciseModalFormBody({ slug, planSlug }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PlanExerciseFormData>({ resolver: zodResolver(planExerciseSchema) })
  
  async function onSubmit(data: PlanExerciseFormData) {
    await createPlanExercise(slug as string, data, planSlug as string)
    closeModal()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="meal-food-form">
      <FormField 
        name="sets"
        label="Sets"
        placeholder="Quantity of sets..."
        register={register}
        error={errors.sets?.message}
      />
      <FormField 
        name="reps"
        label="Reps"
        placeholder="Quantity of reps..."
        register={register}
        error={errors.reps?.message}
      />
      <FormField 
        name="restTime"
        label="Rest Time (s)"
        placeholder="Quantity of the time to rest..."
        register={register}
        error={errors.restTime?.message}
      />
      <div className="buttons">
        <CancelButton />
        <ModalActionButton isUpdate={false} />
      </div>
    </form>
  )
}