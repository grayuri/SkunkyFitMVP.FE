import { IExercise } from "./IExercise";

export interface ITrainingPlanExercise extends IExercise {
  _id: string
  id: string
  reps: number
  sets: number
  restTime: number
  caloriesBurned: number
  trainingPlanSlug: string
  userId: string
}