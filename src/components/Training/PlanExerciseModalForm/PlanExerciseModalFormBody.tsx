"use client"

import { useForm } from "react-hook-form";
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@/components/UI/FormField/FormField";
import { CancelButton, ModalActionButton } from "@/components/UI/ModalFormButtons/ModalFormButtons";
import { ITrainingPlanExercise } from "@/types/ITrainingPlanExercise";
import { getOne } from "@/services/FetchServices";
import { updatePlanExercise } from "./Actions";
import closeModal from "@/utils/closeModal";

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
  trainingPlanSlug: string | null | undefined
  exerciseSlug: string | null | undefined
}

export default function PlanExerciseFormBody({ exerciseSlug, trainingPlanSlug }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PlanExerciseFormData>({ resolver: zodResolver(planExerciseSchema) })
  
  async function onSubmit(data: PlanExerciseFormData) {
    if (exerciseSlug && trainingPlanSlug) await updatePlanExercise(data, exerciseSlug, trainingPlanSlug)
    
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
        <ModalActionButton isUpdate={true} />
      </div>
    </form>
  )
}