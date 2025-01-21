"use server"

import { revalidateTag } from "next/cache"

const url = process.env.API_BASE_URL + "simple-unique-users/simple-unique-user"

export async function updateSimpleUser(data: any) {
  await fetch(url, {
    method: "PATCH",
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify(data)
  })

  revalidateTag("diets")
  revalidateTag("plans")
  revalidateTag("stats")
}