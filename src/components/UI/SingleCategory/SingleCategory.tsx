"use client"

import { useSearchParams } from "next/navigation"
import { usePathname } from "next/navigation";
import { IoShuffleOutline } from "react-icons/io5";

import "./SingleCategory.scss";
import Link from "next/link";

interface Props {
  name: string
  slug?: string
  pictureUrl?: string
  isAll?: boolean
}

export default function SingleCategory({ name, slug, pictureUrl, isAll }: Props) {
  const pathname = usePathname()
  const route = pathname.split("/")[2]
  const searchParams = useSearchParams()
  const categorySearched = searchParams.get("category")

  if (isAll) {
    return (
      <Link href={pathname}>
        <div className={`category all ${route} ${ !categorySearched ? "selected" : "" }`}>
          <div className="image">
            <IoShuffleOutline className="icon" />
          </div>
          <p>{name}</p>
        </div>
      </Link>
    )
  }
  else {
    return (
      <Link href={pathname + "?category=" + slug}>
        <div className={`category ${route} ${ categorySearched === slug ? "selected" : "" }`}>
          <div className="image">
            <img src={pictureUrl} alt={name + " Picture"} />
          </div>
          <p>{name}</p>
        </div>
      </Link>
    )
  }
}
