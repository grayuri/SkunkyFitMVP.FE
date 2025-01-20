import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/UI/menu";
import Link from "next/link";
import { Box } from "@chakra-ui/react";

import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { IoPencilOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { DialogTrigger } from "@/components/UI/dialog";
import { deleteMeal } from "./Actions";
import { deleteMenuItemButtonStyles, menuItemStyles, deleteMenuItemStyles } from "@/app/globalStyles";

interface Props {
  slug: string
  dietSlug: string
}

export default function MealOptions(props: Props) {
  return (
    <div className="meal-options">
      <MenuRoot positioning={{ placement: "right-start" }}>
        <MenuTrigger>
          <IoEllipsisVerticalOutline
            style={{
              color: "#ffff",
              fontSize: "32px",
              cursor: "pointer"
            }}
          />
        </MenuTrigger>
        <MenuContent
          padding="4px"
          bgColor="white"
        >
          <DialogTrigger style={{ width: "100%" }} asChild>
            <Link
              href={`/lab/nutrition/${props.dietSlug}?meal=${props.slug}`}
              scroll={false}
              style={{ outlineWidth: "0px" }}
            >
              <MenuItem
                value="update-meal"
                valueText="Update Meal"
                {...menuItemStyles}
              >
                <IoPencilOutline style={{ fontSize: "24px" }} />
                <Box flex={1}>Update Meal</Box>
              </MenuItem>
            </Link>
          </DialogTrigger>
          <form action={async () => deleteMeal(props.slug)}>
            <MenuItem
              value="delete-meal"
              valueText="Delete Meal"
              { ...deleteMenuItemStyles }
            >
              <button style={deleteMenuItemButtonStyles}>
                <IoTrashOutline style={{ fontSize: "24px" }} />
                <Box flex={1}>Delete Meal</Box>
              </button>
            </MenuItem>
          </form>
        </MenuContent>
      </MenuRoot>
    </div>
  )
}
