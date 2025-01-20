import { IExercise } from "@/types/IExercise";

import CreateButton from "@/components/UI/CreateButton/CreateButton";
import { IoLocateOutline } from "react-icons/io5";

import "./Exercise.scss";
import { DialogTrigger } from "@/components/UI/dialog";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { deleteExercise } from "../PlanExerciseOptions/Actions";

interface Props extends IExercise {
  isAdded: boolean
}

export default function Exercise(props: Props) {
  const params = useParams()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const searchParam = searchParams.get("search")
  const page = searchParams.get("page")

  let exerciseModalFormLink = `${pathname}?name=${props.slug}`

  if (searchParam) exerciseModalFormLink += `&search=${searchParam}`
  if (searchParams.has("category")) exerciseModalFormLink += `&category=${props.muscleTargeted}`
  if (page) exerciseModalFormLink += `&page=${page}`

  return (
    <div className="exercise">
      <div className="image-container">
        <Image src={props.pictureUrl} alt="Exercise Image" fill />
      </div>
      <div className="content">
        <div className="details">
          <h4>{props.name}</h4>
          <div className="muscle-targeted">
            <IoLocateOutline className="icon" />
            <span>{props.muscleTargeted}</span>
          </div>
        </div>
          {
            !props.isAdded
            ? (
              <DialogTrigger asChild>
                <Link href={exerciseModalFormLink} scroll={false}>
                  <CreateButton 
                    route="training"
                    size="48px"
                    border={false}
                  />
                </Link>
              </DialogTrigger>
            )
            : (
              <form action={async () => await deleteExercise(props.slug, params.planSlug as string)}>
                <button>
                  <CreateButton 
                    route="training"
                    size="48px"
                    toRemove={true}
                    border={false}
                  />
                </button>
              </form>
            )
          }
      </div>
    </div>
  )
}
