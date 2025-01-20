import ProfileForm from "@/components/Profile/ProfileForm/ProfileForm"
import { getOne } from "@/services/FetchServices"

export default async function ProfilePage() {
  const simpleUser = await getOne(process.env.API_BASE_URL + "simple-unique-users/simple-unique-user", { cache: "no-store" })

  return (
    <ProfileForm user={simpleUser} />
  )
}