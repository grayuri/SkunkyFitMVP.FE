import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/UI/menu";
import Link from "next/link";
import { Box } from "@chakra-ui/react";

import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { IoPencilOutline } from "react-icons/io5";
import { DialogTrigger } from "@/components/UI/dialog";
import { deleteMenuItemButtonStyles, deleteMenuItemStyles, menuItemStyles } from "@/app/globalStyles";
import { deleteExercise } from "./Actions";

interface Props {
  planSlug: string
  slug: string
}

export default function PlanExerciseOptions(props: Props) {
  return (
    <div className="meal-food-options">
      <MenuRoot positioning={{ placement: "right-start" }}>
        <MenuTrigger>
          <IoEllipsisVerticalOutline 
            style={{
              color: "#686867",
              fontSize: "32px",
              cursor: "pointer",
              outlineWidth: "0px"
            }}
          />
        </MenuTrigger>
        <MenuContent 
          padding="12px"
          bgColor="white"
        >
          <DialogTrigger style={{ width: "100%" }} asChild>
            <Link 
              href={`/lab/training/${props.planSlug}?exercise=${props.slug}`}
              scroll={false}
              style={{ outlineWidth: "0px" }}
            >
              <MenuItem
                value="update-training-plan-exercise"
                valueText="Update Exercise"
                { ...menuItemStyles }
              >
                <IoPencilOutline style={{ fontSize: "24px" }} />
                <Box flex={1}>Update Exercise</Box>
              </MenuItem>
            </Link>
          </DialogTrigger>

          <form action={async () => await deleteExercise(props.slug, props.planSlug)}>
            <MenuItem 
              value="delete-training-plan-exercise" 
              valueText="Delete Exercise"
              { ...deleteMenuItemStyles }
            >
              <button style={deleteMenuItemButtonStyles}>
                <IoTrashOutline style={{ fontSize: "24px" }} />
                <Box flex={1}>Delete Exercise</Box>
              </button>
            </MenuItem>
          </form>
        </MenuContent>
      </MenuRoot>
    </div>
  )
}
