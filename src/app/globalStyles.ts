import { colors } from "@mui/material"

export const menuItemStyles = {
  cursor: "pointer",
  padding: "6px",
  paddingRight: "16px",
  color: "#1D1F1A",
  _hover: {
    bgColor: "#ececeb"
  },
  transition: "0.12s ease-in-out"
}

export const deleteMenuItemStyles = {
  ...menuItemStyles,
  color:"white",
  bgColor:"#D8442A",
  _hover:{
    bgColor: "#E06A56"
  }
}

export const deleteMenuItemButtonStyles = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  gap: "8px"
}

export function getPaginationStyles(route: string) {
  if (route === "nutrition") {
    return {
      previousStyles: {
        
      },
      itemsStyles: {

      },
      nextStyles: {

      }
    }
  }
}

export function getSkunkyButtonStyles(route: string, outline?: boolean) {
  if (route === "nutrition") {
    if (outline) {
      return {
        color: "#83B120",
        border: "2px solid #83B120",
        borderRadius: "8px",
        padding: "32px 24px",
        bg: "white",
        _hover: {
          bg: "#ececeb"
        }
      }
    }
    else {
      return {
        bg: "#83B120",
        color: "white",
        borderRadius: "8px",
        padding: "32px 24px",
        border: "2px solid #83B120",
        _hover: {
          border: "2px solid #B5E056",
          bg: "#B5E056"
        }
      }
    } 
  }
  else {
    if (outline) {
      return {
        color: "#2051B0",
        border: "2px solid #2051B0",
        borderRadius: "8px",
        padding: "32px 24px",
        bg: "white",
        _hover: {
          bg: "#ececeb"
        }
      }
    }
    else {
      return {
        bg: "#2051B0",
        color: "white",
        borderRadius: "8px",
        padding: "32px 24px",
        border: "2px solid #2051B0",
        _hover: {
          border: "2px solid #2A65D8",
          bg: "#2A65D8"
        }
      }
    } 
  }
}