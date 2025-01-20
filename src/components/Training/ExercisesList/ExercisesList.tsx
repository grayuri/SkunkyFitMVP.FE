"use client"

import { IExercise } from "@/types/IExercise";

import Exercise from "../Exercise/Exercise";

import "./ExercisesList.scss";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@/components/UI/Pagination/Pagination";
import { DialogBackdrop, DialogRoot } from "@/components/UI/dialog";
import EmptyResponse from "@/components/UI/EmptyResponse/EmptyResponse";
import ExerciseModalForm from "../ExerciseModalForm/ExerciseModalForm";
import getListResults from "@/utils/getListResults";

interface Props {
  exercises: IExercise[]
  exercisesAdded: string[]
  planSlug: string
  pages: number
  total: number
  results: number
}

export default function ExercisesList({ exercises, planSlug, exercisesAdded, pages, results, total }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categorySlug = searchParams.get("category")
  const searchSlug = searchParams.get("search")
  const page = searchParams.get("page")

  let pageLink = `/lab/training/${planSlug}/exercises`

  if (categorySlug) {
    pageLink += `?category=${categorySlug}`

    if (page) pageLink += `&page=${page}`
  }
  else if (searchSlug) {
    pageLink += `?search=${searchSlug}`

    if (page) pageLink += `&page=${page}`
  }
  else {
    if (page) pageLink += `?page=${page}`
  }

  return (
    <DialogRoot
      placement="center"
      motionPreset="slide-in-bottom"
      onExitComplete={() => router.push(pageLink, { scroll: false })}
    >
      <DialogBackdrop />
      <ExerciseModalForm planSlug={planSlug} />
      {
        exercises.length > 0
        ? (
          <div className="list-container">
            <p className="results">
              { 
                getListResults({
                  page: Number(page) || 1,
                  pages,
                  total,
                  results
                })
              }
            </p>
            <div className="exercises-list">
              {
                exercises && (
                  exercises.map(exercise => (
                    <Exercise key={exercise.slug} {...exercise} isAdded={exercisesAdded.includes(exercise.slug)} />
                  ))
                )
              }
            </div>
            <Pagination total={pages} route="training" pageLink={pageLink} />
          </div>
        )
        : (
          <EmptyResponse 
            type="training"
            object="exercise"
            readonly={true}
          />
        )
      }
    </DialogRoot>
  )
}
