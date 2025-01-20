import { IoAddOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import './CreateButton.scss'

interface Props {
  route: "nutrition" | "training"
  size: string
  border?: boolean
  toRemove?: boolean
  onClick?: () => void
}

export default function CreateButton({ size, route, border, toRemove, onClick }: Props) {
  return (
    <div 
      className={`create-button ${ route === "nutrition" ? "nutrition" : "training" }`}
      style={{ border: !border ? "none" : "2px solid" }}
      onClick={onClick}
    >
      {
        toRemove
        ? (
          <IoCloseOutline style={{ fontSize: size }} />
        )
        : (
          <IoAddOutline style={{ fontSize: size }} />
        )
      }
    </div>
  )
}
