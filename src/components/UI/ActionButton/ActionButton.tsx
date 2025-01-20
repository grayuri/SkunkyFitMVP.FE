import { Button, Spinner } from "@chakra-ui/react";
import "./ActionButton.scss"

interface Props {
  padding: string
  fontVariant: string
  buttonVariant: string
  text: string
  borderRadius: string
  route?: string
  disabled?: boolean
  icon?: React.FC<{ className: string }>
  onClick?: () => void
}

export default function ActionButton({ 
  route, fontVariant, buttonVariant, icon: Icon, text, padding, disabled, onClick, borderRadius
}: Props) {
  let className = `${buttonVariant !== "cancel" ? route : buttonVariant} `

  if (fontVariant) className += `${fontVariant} `
  if (buttonVariant !== "cancel") className += `${buttonVariant} `

  if (buttonVariant === "cancel") return (
    <div
      id="action-button"
      className={className}
      style={{ padding, borderRadius }}
      onClick={(e) => e.preventDefault()}
    >
      { text }
    </div>
  )
  else return (
    <button
      id="action-button"
      className={className}
      style={{ padding, borderRadius }}
      disabled={ disabled ? true : false }
      onClick={onClick}
    >
      { 
        (Icon && !disabled) && (
          <Icon className="icon" />
        ) 
      }
      {
        disabled && (
          <Spinner color="white" />
        )
      }
      <span>{ disabled ? "Loading..." : text }</span>
    </button>
  )
}
