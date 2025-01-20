"use client"

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
import { deleteMealFood } from "./Actions";
import { menuItemStyles, deleteMenuItemButtonStyles, deleteMenuItemStyles } from "@/app/globalStyles";

interface Props {
  mealFoodSlug: string
  mealSlug: string
  dietSlug: string
}

export default function MealFoodOptions({ mealFoodSlug, mealSlug, dietSlug }: Props) {
  const mealFoodLink = `/lab/nutrition/${dietSlug}/?meal=${mealSlug}&mealFood=${mealFoodSlug}`

  return (
    <div className="meal-food-options">
      <MenuRoot positioning={{ placement: "right-start" }}>
        <MenuTrigger>
          <IoEllipsisVerticalOutline
            style={{
              color: "#686867",
              fontSize: "32px",
              cursor: "pointer"
            }}
          />
        </MenuTrigger>
        <MenuContent
          padding="4px"
          bgColor="white"
        >
          <DialogTrigger asChild>
            <Link
              href={mealFoodLink}
              scroll={false}
              style={{
                outlineWidth: "0px"
              }}
            >
              <MenuItem
                value="update-food"
                valueText="Update Food"
                {...menuItemStyles}
              >
                <IoPencilOutline style={{ fontSize: "24px" }} />
                <Box flex={1}>Update Food</Box>
              </MenuItem>
            </Link>
          </DialogTrigger>

          <form action={async () => await deleteMealFood(mealFoodSlug, mealSlug)}>
            <MenuItem
              value="delete-food"
              valueText="Delete Food"
              {...deleteMenuItemStyles }
            >
              <button style={deleteMenuItemButtonStyles}>
                <IoTrashOutline style={{ fontSize: "24px" }} />
                <Box flex={1}>Delete Food</Box>
              </button>
            </MenuItem>
          </form>
        </MenuContent>
      </MenuRoot>
    </div>
  )
}
