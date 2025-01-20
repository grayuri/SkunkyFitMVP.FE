"use client"

import './SearchPageLayout.scss'
import { IoSearch } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import slugify from '@/utils/slugify';
import Image from 'next/image';

export default function SearchPageLayout({ object, children, route }: { 
  object: string,
  children: any,
  route: string
}) {
  const [search, setSearch] = useState("")
  const objectPlural = object + "s"
  const pathname = usePathname()
  
  let searchLink = pathname

  if (search !== "") searchLink += `?search=${search}`

  return (
    <main className={`search-page ${route}`}>
      <section className="top-section">
        <div className="banner">
          <Image fill priority alt="Banner Image" src={route === "nutrition" ? "/images/nutrition-banner.png" : "/images/trainning-banner.png"} className="banner" />
        </div>
        <h1>Search The { objectPlural } That You Need </h1>
        <div className="search-input-container">
          <IoSearch className='search-icon' />
          <input 
            type="text" 
            placeholder={`Type here the wished ${object}...`} 
            onChange={(e) => setSearch(slugify(e.target.value))}
          />
          <Link href={searchLink} className="send-button">
            <IoSend className="icon" />
          </Link>
        </div>
      </section>

      <section className="content">
        { children }
      </section>
    </main>
  )
}
