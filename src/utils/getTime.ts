export default function getTime(time: Date): string {
  const date = new Date(time)
  const hours = date.getHours() + 2
  const minutes = date.getMinutes()

  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`
}