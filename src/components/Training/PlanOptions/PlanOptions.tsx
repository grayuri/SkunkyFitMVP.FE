import { Box } from "@chakra-ui/react";
import { DialogTrigger } from "@/components/UI/dialog";
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
import { deleteMenuItemButtonStyles, deleteMenuItemStyles, menuItemStyles } from "@/app/globalStyles";
import { deletePlan } from "./Actions";
import { usePathname } from "next/navigation";
import { useRef } from "react";

interface Props {
  slug: string
}

export default function PlanOptions(props: Props) {
  const pathname = usePathname()

  const downloadAnchorRef = useRef<HTMLAnchorElement>(null)
  
    function downloadPlan() {
      if (downloadAnchorRef && downloadAnchorRef.current) {
        const anchor = downloadAnchorRef.current
  
        anchor.href = `${process.env.API_BASE_URL}training-plans/pdf/detailed/${props.slug}`
        anchor.download = `${props.slug}.pdf`
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
              outlineWidth: "0px"
            }}
          />
        </MenuTrigger>
        <MenuContent 
          padding="4px"
          bgColor="white"
        >
          <Link 
            href={`${pathname}/${props.slug}`}
            style={{ outlineWidth: "0px" }}
          >
            <MenuItem
              value="open-training-plan"
              valueText="Open Training Plan"
              { ...menuItemStyles }
            >
              <IoOpenOutline style={{ fontSize: "24px" }} />
              <Box flex={1}>Open Training Plan</Box>
            </MenuItem>
          </Link>
          <DialogTrigger style={{ width: "100%" }} asChild>
            <Link
              href={`/lab/training?trainingPlan=${props.slug}`}
              style={{ outlineWidth: "0px" }}
            >
              <MenuItem 
                value="update-training-plan" 
                valueText="Update Training Plan"
                { ...menuItemStyles }
              >
                <IoPencilOutline style={{ fontSize: "24px" }} />
                <Box flex={1}>Update Training Plan</Box>
              </MenuItem>
            </Link>
          </DialogTrigger>
          <MenuItem 
            value="download-training-plan" 
            valueText="Download Training Plan"
            onClick={downloadPlan}
            { ...menuItemStyles }
          >
            <IoDownloadOutline style={{ fontSize: "24px" }} />
            <Box flex={1}>Download Training Plan</Box>
            <a ref={downloadAnchorRef} style={{ display: "none" }} />
          </MenuItem>
          <form action={async () => await deletePlan(props.slug)}>
            <MenuItem 
              value="delete-training-plan" 
              valueText="Delete Training Plan"
              { ...deleteMenuItemStyles }
            >
              <button style={deleteMenuItemButtonStyles}>
                <IoTrashOutline style={{ fontSize: "24px" }} />
                <Box flex={1}>Delete Training Plan</Box>
              </button>
            </MenuItem>
          </form>
        </MenuContent>
      </MenuRoot>
    </div>
  )
}
