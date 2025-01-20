"use client"

import { IDiet } from "@/types/IDiet";

import { useRouter } from "next/navigation";
import { DialogRoot, DialogBackdrop, DialogTrigger } from "@/components/UI/dialog";
import DietModalForm from "@/components/Nutrition/DietModalForm/DietModalForm";
import EmptyResponse from "@/components/UI/EmptyResponse/EmptyResponse";
import CreateButton from "@/components/UI/CreateButton/CreateButton";
import Diet from "../Diet/Diet";
import "./DietsList.scss";

interface Props {
  diets: IDiet[]
}

export default function DietsList({ diets }: Props) {
  const router = useRouter()

  return (
    <DialogRoot
      placement="center"
      motionPreset="slide-in-bottom"
      onExitComplete={() => router.push("/lab/nutrition/", { scroll: false })}
    >
      <DialogBackdrop />
      <DietModalForm />
      {
        diets.length > 0
        ? (
          <div className="diets-list">
            {
              diets.map(diet => (
                <Diet key={diet._id} {...diet} />
              ))
            }
            <DialogTrigger style={{ width: "fit-content" }}>
              <CreateButton size="48px" route="nutrition" />
            </DialogTrigger>
          </div>

        )
        : (
          <EmptyResponse 
            type="nutrition"
            object="diet"
          />
        )
      }
    </DialogRoot>
  )
}
