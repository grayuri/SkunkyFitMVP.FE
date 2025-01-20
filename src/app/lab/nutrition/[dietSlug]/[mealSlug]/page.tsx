import { getAll } from "@/services/FetchServices";
import { IMeal } from "@/types/IMeal";
import { redirect } from "next/navigation";

export default function Foods({ params }: any) {
  redirect(`/lab/nutrition/${params.dietSlug}/${params.mealSlug}/foods`)
}