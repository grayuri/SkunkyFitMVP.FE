"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import ReactPaginate from 'react-paginate'
import "./Pagination.scss"

export default function Pagination({ total, route, pageLink }: { total: number, route: string, pageLink: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = searchParams.get("page")
  
  function changePage({ selected }: any) {
    const url = new URL(`http://localhost:3000${pageLink}`)
    url.searchParams.set("page", selected + 1)
    router.push(url.toString())
  }

  return (
    <ReactPaginate 
      breakLabel="..."
      nextLabel=">"
      onPageChange={changePage}
      pageRangeDisplayed={total < 6 ? 4 : 2}
      pageCount={total}
      previousLabel="<"
      renderOnZeroPageCount={null}
      className={`paginator ${route}`}
      activeLinkClassName='active'
      previousLinkClassName='pointers'
      nextLinkClassName='pointers'
      forcePage={!page ? 0 : Number(page) - 1}
      marginPagesDisplayed={total < 6 ? 2 : 1}
    />
  )
}
