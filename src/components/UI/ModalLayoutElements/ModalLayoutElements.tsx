import {
  DialogHeader,
  DialogTitle,
  DialogBody
} from "@/components/UI/dialog";

interface Props {
  title: string
  body: React.ReactNode
}

export default function ModalLayoutElements({ title, body }: Props) {
  return (
    <>
      <DialogHeader>
        <DialogTitle>{ title }</DialogTitle>
      </DialogHeader>
      <DialogBody>
        { body }
      </DialogBody>
    </>
  )
}