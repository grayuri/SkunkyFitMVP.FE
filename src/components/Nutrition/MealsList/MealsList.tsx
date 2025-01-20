"use client"

import { IMeal } from "@/types/IMeal";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { DialogRoot, DialogBackdrop, DialogTrigger } from "@/components/UI/dialog";
import MealModalForm from "../MealModalForm/MealModalForm";
import CreateButton from "@/components/UI/CreateButton/CreateButton";
import EmptyResponse from "@/components/UI/EmptyResponse/EmptyResponse";
import Meal from "../Meal/Meal";
import "./MealsList.scss";
import { useRef } from "react";
import { IoAttachOutline, IoDownloadOutline } from "react-icons/io5";
import { Button } from "@chakra-ui/react";
import { getSkunkyButtonStyles } from "@/app/globalStyles";

interface Props {
  meals: IMeal[]
  dietSlug: string
}

export default function MealsList({ meals, dietSlug }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const downloadAnchorRef = useRef<HTMLAnchorElement>(null)

  function downloadDiet(type: string) {
    if (downloadAnchorRef && downloadAnchorRef.current) {
      const anchor = downloadAnchorRef.current

      anchor.href = `${process.env.API_BASE_URL}diets/pdf/${type}/${dietSlug}`
      anchor.download = `${dietSlug}.pdf`
      anchor.click()
    }
  }

  return (
    meals.length > 0
    ? (
      <>
        <div className="download-buttons">
          <Button 
            className="button" 
            onClick={() => downloadDiet("simplified")}
            {...getSkunkyButtonStyles("nutrition", true)}
          >
            Simplified Download
          </Button>
          <Button 
            className="button" 
            onClick={() => downloadDiet("detailed")}
            {...getSkunkyButtonStyles("nutrition")}
          >
            <IoDownloadOutline />
            Detailed Download
          </Button>
          {/* <Button className="button" {...getSkunkyButtonStyles("training")}>
            <IoAttachOutline />
            Attach Training Plan
          </Button> */}
          <a href="#" ref={downloadAnchorRef} />
        </div>
        <div className="meals-list">
          {
            meals
            .sort((a: any, b: any) => a.time - b.time)
            .map(meal => (
              <Meal key={meal._id} {...meal} />
            ))
          }
          <DialogRoot
            placement="center"
            motionPreset="slide-in-bottom"
            onExitComplete={() => router.push(pathname, { scroll: false })}
          >
            <DialogBackdrop />
            <MealModalForm dietSlug={dietSlug} />
            <DialogTrigger style={{ width: "fit-content", margin: "auto" }}>
              <CreateButton size="48px" route="nutrition" />
            </DialogTrigger>
          </DialogRoot>
        </div>
      </>
    )
    : (
      <DialogRoot
        placement="center"
        motionPreset="slide-in-bottom"
        onExitComplete={() => router.push(pathname, { scroll: false })}
      >
        <DialogBackdrop />
        <MealModalForm dietSlug={dietSlug} />
        <EmptyResponse 
          type="nutrition"
          object="meal"
        />
      </DialogRoot>
    )
  )
}
