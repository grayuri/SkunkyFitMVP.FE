import './Button.scss'

interface Props {
  children: string
}

export default function Button({ children }: Props) {
  return (
    <button className="button-container">
      {children}
    </button>
  )
}
