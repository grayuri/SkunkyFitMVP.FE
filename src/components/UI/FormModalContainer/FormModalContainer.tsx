import { DialogContent } from "../dialog";
import "./FormModalContainer.scss";

interface Props {
  children: React.ReactNode,
  route: "nutrition" | "training"
}

export default function FormModalContainer({ children, route }: Props) {
  return (
    <DialogContent 
      className={`form-modal-container ${route}`}
      style={{ transition: "0.24s ease" }}
    >
      { children }
    </DialogContent>
  )
}
