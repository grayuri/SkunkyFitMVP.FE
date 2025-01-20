"use client"

import { ITrainingPlanExercise } from "@/types/ITrainingPlanExercise";

import { useRef } from "react";

import CreateButton from "@/components/UI/CreateButton/CreateButton";
import PlanExercise from "../PlanExercise/PlanExercise";

import "./PlanExercisesList.scss";
import { DialogBackdrop, DialogRoot } from "@/components/UI/dialog";
import PlanExerciseModalForm from "../PlanExerciseModalForm/PlanExerciseModalForm";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@chakra-ui/react";
import { getSkunkyButtonStyles } from "@/app/globalStyles";
import { IoDownloadOutline } from "react-icons/io5";
import Link from "next/link";

interface Props {
  planExercises: ITrainingPlanExercise[]
  planSlug: string
}

export default function PlanExercisesList({ planExercises, planSlug }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const downloadAnchorRef = useRef<HTMLAnchorElement>(null)

  function downloadPlan(type: string) {
    if (downloadAnchorRef && downloadAnchorRef.current) {
      const anchor = downloadAnchorRef.current

      anchor.href = `${process.env.API_BASE_URL}training-plans/pdf/${type}/${planSlug}`
      anchor.download = `${planSlug}.pdf`
      anchor.click()
    }
  }

  return (
    <>
      <div className="buttons">
        <Button 
          className="button" 
          onClick={() => downloadPlan("detailed")}
          {...getSkunkyButtonStyles("training")}
        >
          <IoDownloadOutline />
          Download
        </Button>
        <a href="#" ref={downloadAnchorRef} />
      </div>
      <div className="plan-exercises-list">
        <DialogRoot
          placement="center"
          motionPreset="slide-in-bottom"
          onExitComplete={() => router.push(pathname, { scroll: false })}
        >
          <DialogBackdrop />
          <PlanExerciseModalForm planSlug={planSlug} />
          {
            planExercises.map((planExercise: ITrainingPlanExercise, index: number) => (
              <PlanExercise 
                key={planExercise.slug} 
                index={index} 
                maxIndex={planExercises.length - 1} 
                {...planExercise} 
              />
            ))
          }
        </DialogRoot>
        <Link href={`${pathname}/exercises`}>
          <CreateButton size="48px" route="training" border={true} />
        </Link>
      </div>
    </>
  )
}
