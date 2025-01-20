import { DialogTrigger } from "@/components/UI/dialog";
import { Box, Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/UI/menu";
import Link from 'next/link';

import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { IoPencilOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { IoOpenOutline } from "react-icons/io5";
import { IoDownloadOutline } from "react-icons/io5";
import { IoAttachOutline } from "react-icons/io5";
import { deleteDiet } from "./Actions";
import { menuItemStyles, deleteMenuItemButtonStyles, deleteMenuItemStyles } from "@/app/globalStyles";
import { useRef } from "react";

interface Props {
  slug: string
}

export default function DietOptions({ slug }: Props) {
  const downloadAnchorRef = useRef<HTMLAnchorElement>(null)

  function downloadDiet() {
    if (downloadAnchorRef && downloadAnchorRef.current) {
      const anchor = downloadAnchorRef.current

      anchor.href = `${process.env.API_BASE_URL}diets/pdf/detailed/${slug}`
      anchor.download = `${slug}.pdf`
      anchor.click()
    }
  }

  return (
    <div className='options-button'>
      <MenuRoot positioning={{ placement: "right-start" }}>
        <MenuTrigger>
          <IoEllipsisVerticalOutline
            style={{
              color: "#686867",
              fontSize: "32px",
              cursor: "pointer",
              outlineWidth: "0px",
            }}
          />
        </MenuTrigger>
        <MenuContent
          padding="4px"
          bgColor="white"
        >
          <Link
            href={`/lab/nutrition/${slug}`}
            style={{ outlineWidth: "0px" }}
          >
            <MenuItem
              value="open-diet"
              valueText="Open Diet"
              {...menuItemStyles}
            >
              <IoOpenOutline style={{ fontSize: "24px" }} />
              <Box flex={1}>Open Diet</Box>
            </MenuItem>
          </Link>

          <DialogTrigger style={{ width: "100%" }} asChild>
            <Link
              href={`/lab/nutrition?diet=${slug}`}
              style={{ outlineWidth: "0px" }}
            >
              <MenuItem
                value="update-diet"
                valueText="Update Diet"
                {...menuItemStyles}
              >
                <IoPencilOutline style={{ fontSize: "24px" }} />
                <Box flex={1}>Update Diet</Box>
              </MenuItem>
            </Link>
          </DialogTrigger>
          <MenuItem
            value="download-diet"
            valueText="Download Diet"
            onClick={downloadDiet}
            {...menuItemStyles}
          >
            <IoDownloadOutline style={{ fontSize: "24px" }} />
            <Box flex={1}>Download Diet</Box>
            <a ref={downloadAnchorRef} style={{ display: "none" }} />
          </MenuItem>
          {/* <MenuItem
            value="attach-training-plan"
            valueText="Attach Training Plan"
            {...menuItemStyles}
          >
            <IoAttachOutline style={{ fontSize: "24px" }} />
            <Box flex={1}>Attach Trainning Plan</Box>
          </MenuItem> */}

          <form action={async () => await deleteDiet(slug)}>
            <MenuItem
              value="delete-diet"
              valueText="Delete Diet"
              {...deleteMenuItemStyles}
            >
              <button style={deleteMenuItemButtonStyles}>
                <IoTrashOutline style={{ fontSize: "24px" }} />
                <Box flex={1}>Delete Diet</Box>
              </button>
            </MenuItem>
          </form>
        </MenuContent>
      </MenuRoot>
    </div>
  )
}
