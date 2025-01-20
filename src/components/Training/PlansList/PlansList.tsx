"use client"

import { ITrainingPlan } from "@/types/ITrainingPlan";

import { useRouter } from "next/navigation";
import { DialogRoot, DialogBackdrop, DialogTrigger } from "@/components/UI/dialog";
import EmptyResponse from "@/components/UI/EmptyResponse/EmptyResponse";
import CreateButton from "@/components/UI/CreateButton/CreateButton";
import Plan from "../Plan/Plan";

import "./PlansList.scss";
import PlanModalForm from "../PlanModalForm/PlanModalForm";

interface Props {
  plans: ITrainingPlan[]
}

export default function PlansList({ plans }: Props) {
  const router = useRouter()

  return (
    <DialogRoot
      placement="center"
      motionPreset="slide-in-bottom"
      onExitComplete={() => router.push("/lab/training/", { scroll: false })}
    >
      <DialogBackdrop />
      <PlanModalForm />
      {
        plans.length > 0
        ? (
          <div className="plans-list">
            {
              plans.map(plan => (
                <Plan key={plan._id} {...plan} />
              ))
            }
            <DialogTrigger style={{ width: "fit-content" }}>
              <CreateButton size="48px" route="training" />
            </DialogTrigger>
          </div>
        )
        : (
          <EmptyResponse
            type="training"
            object="plan"
          />
        )
      }
    </DialogRoot>
  )
}
