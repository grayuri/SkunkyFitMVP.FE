"use client"

import { usePathname } from "next/navigation";
import { DialogActionTrigger } from "@/components/UI/dialog";
import ActionButton from "@/components/UI/ActionButton/ActionButton";

import { IoCheckmarkOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";

export function CancelButton() {
  return (
    <DialogActionTrigger>
      <ActionButton 
        padding="16px"
        buttonVariant="cancel"
        fontVariant="l2-r"
        borderRadius="8px"
        text="Cancel"
      />
    </DialogActionTrigger>
  )
}

export function ModalActionButton({ isUpdate, isSubmitting }: { isUpdate: boolean, isSubmitting: boolean }) {
  const pathname = usePathname()
  const route = pathname.split("/")[2]

  if (!isUpdate) return (
    <ActionButton 
      disabled={isSubmitting}
      route={route}
      padding="16px"
      borderRadius="8px"
      buttonVariant="filled"
      fontVariant="l2-r"
      icon={IoAddOutline}
      text="Create"
    />
  )

  if (isUpdate) return (
    <ActionButton 
      disabled={isSubmitting}
      route={route}
      padding="16px"
      borderRadius="8px"
      buttonVariant="filled"
      fontVariant="l2-r"
      icon={IoCheckmarkOutline}
      text="Save"
    />
  )
}