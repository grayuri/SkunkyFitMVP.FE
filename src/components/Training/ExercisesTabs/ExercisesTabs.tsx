import { Tabs } from "@chakra-ui/react";
import Link from "next/link";

import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';

import "./ExercisesTabs.scss";

const triggersStyles = {
  paddingX: "24px",
  fontSize: "24px",
  color: "#838382",
  fontWeight: "600",
  borderBottom: "3px solid #D0D0CF",
  _selected: {
    color: "#2051B0",
    borderBottom: "4px solid #2051B0"
  }
}

export default function ExercisesTabs() {
  return (
    <div className="exercises-tabs">
      <Tabs.Root defaultValue="all-exercises">
        <Tabs.List borderBottom="none">
          <Link href="/lab/training/123/exercises">
            <Tabs.Trigger 
              value="all-exercises"
              { ...triggersStyles }
            >
              <FitnessCenterOutlinedIcon />
              All Exercises
            </Tabs.Trigger>
          </Link>
          <Link href="/lab/training/123/exercises/your-advanced-sets">
            <Tabs.Trigger 
              value="your-advanced-sets"
              { ...triggersStyles }
            >
              <MovingOutlinedIcon />
              Your Advanced Sets
            </Tabs.Trigger>
          </Link>
        </Tabs.List>
      </Tabs.Root>
    </div>
  )
}
