export default function checkIfFileIsImage(file: File): boolean {
  if (file?.name) {
    const type = file.name.split(".").pop()
    if (type === "png" || type === "jpg" || type === "jpeg") return true
  }

  return false
}