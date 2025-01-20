"use client"

import { Box, Stack, Button } from "@chakra-ui/react";
import { IoReorderThreeOutline } from "react-icons/io5";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoPersonOutline } from "react-icons/io5";
import {
  DrawerBackdrop,
  DrawerActionTrigger,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/UI/drawer"

import './LabsNavbar.scss'

export default function Navbar() {
  const pathname = usePathname()
  const routeName = pathname.split("/")[2]

  const nutritionRoute = "/lab/nutrition/"
  const trainingRoute = "/lab/training/"
  const mainColor = routeName === "training" ? "#2051B0" : "#83B120"

  if (!pathname.includes("lab")) return null

  return (
    
      <div className={`labs-navbar ${ routeName === "training" ? "training" : "nutrition" }`}>
        <div className="logo">
          <Link href="/">
            SKUNKY
          </Link>
        </div>

        {/* <ul className="navlist">
          <li className={ routeName === "nutrition" ? "actual-route" : ""}>
            <Link href={nutritionRoute}>Nutrition</Link>
          </li>
          <li className={ routeName === "training" ? "actual-route" : ""}>
            <Link href={trainingRoute}>Training</Link>
          </li>
        </ul>

        <Link href="/lab/profile" className="profile-link-container">
          <div className="profile-link">
            <IoPersonOutline style={{ fontSize: "32px" }} className="icon" />
          </div>
        </Link> */}
        <DrawerRoot>
          <DrawerTrigger asChild>
            <Button 
              height="60px" 
              width="60px" 
              variant="outline"
              color="white"
              _hover={{ bg: "#ffffff25" }}
              // className="burguer-button"
            >
              <IoReorderThreeOutline />
            </Button>
          </DrawerTrigger>
          <DrawerBackdrop />
          <DrawerContent>
            <DrawerBody marginTop="56px">
              <Stack fontSize="x-large">
                <DrawerActionTrigger asChild>
                  <Link href="/lab/nutrition">
                    <Box
                      rounded="md"
                      padding="12px"
                      transition="0.24s ease"
                      cursor="pointer"
                      _hover={{
                        bg: "#ecebeb",
                        borderLeft: `8px solid ${mainColor}`
                      }}
                    >
                      Nutrition
                    </Box>
                  </Link>
                </DrawerActionTrigger>
                <DrawerActionTrigger asChild>
                  <Link href="/lab/training">
                    <Box
                      rounded="md"
                      padding="12px"
                      transition="0.24s ease"
                      cursor="pointer"
                      _hover={{
                        bg: "#ecebeb",
                        borderLeft: `8px solid ${mainColor}`
                      }}
                    >
                      Training
                    </Box>
                  </Link>
                </DrawerActionTrigger>
                <DrawerActionTrigger asChild>
                  <Link href="/lab/profile">
                    <Box
                      rounded="md"
                      padding="12px"
                      transition="0.24s ease"
                      cursor="pointer"
                      _hover={{
                        bg: "#ecebeb",
                        borderLeft: `8px solid ${mainColor}`
                      }}
                    >
                      Profile
                    </Box>
                  </Link>
                </DrawerActionTrigger>
              </Stack>
            </DrawerBody>
            <DrawerCloseTrigger fontSize="48px" />
          </DrawerContent>
        </DrawerRoot>
      </div>
    
  )
}
