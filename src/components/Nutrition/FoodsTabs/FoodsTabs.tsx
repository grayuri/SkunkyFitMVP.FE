import { Tabs } from "@chakra-ui/react";

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';

import "./FoodsTabs.scss";
import Link from "next/link";

const triggersStyles = {
  paddingX: "24px",
  fontSize: "24px",
  color: "#838382",
  fontWeight: "600",
  borderBottom: "3px solid #D0D0CF",
  _selected: {
    color: "#83B120",
    borderBottom: "4px solid #83B120"
  }
}

export default function FoodsTabs() {
  return (
    <div className="foods-tabs">
      <Tabs.Root defaultValue="all-foods">
        <Tabs.List borderBottom="none">
          <Link href="/lab/nutrition/123/foods">
            <Tabs.Trigger
              value="all-foods"
              { ...triggersStyles }
            >
              <LocalDiningOutlinedIcon />
              All Foods
            </Tabs.Trigger>
          </Link>
          <Link href="/lab/nutrition/123/foods/community-recipes">
            <Tabs.Trigger
              value="community-recipes"
              { ...triggersStyles }
            >
              <PeopleAltOutlinedIcon />
              Community Recipes
            </Tabs.Trigger>
          </Link>
          <Link href="/lab/nutrition/123/foods/your-recipes">
            <Tabs.Trigger
              value="your-recipes"
              { ...triggersStyles }
            >
              <PersonOutlineOutlinedIcon />
              Your Recipes
            </Tabs.Trigger>
          </Link>
        </Tabs.List>
      </Tabs.Root>
    </div>
  )
}
