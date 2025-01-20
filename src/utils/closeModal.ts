export default function closeModal() {
  const event = new KeyboardEvent("keydown", {
    bubbles: true,
    cancelable: true,
    key: "Escape"
  })

  document.body.dispatchEvent(event)
}