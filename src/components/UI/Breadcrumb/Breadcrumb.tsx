import React, { ReactNode } from 'react'
import { BreadcrumbCurrentLink, BreadcrumbLink, BreadcrumbRoot } from '../breadcrumb'

interface Props {
  links: { href: string, name: string }[]
  route: "nutrition" | "training"
  children: ReactNode
}

export default function Breadcrumb({ links, children, route }: Props) {
  const mainColor = route === "nutrition" ? "#83B120" : "#2051B0"

  return (
    <BreadcrumbRoot 
      style={{ 
        display: "flex", 
        justifyContent: "center",
      }}
      size="lg"
      marginBottom="48px"
    >
      {
        links.map(link => (
          <BreadcrumbLink key={link.href} href={link.href} color="#838382">{link.name}</BreadcrumbLink>
        ))
      }
      <BreadcrumbCurrentLink color={mainColor} fontWeight={600}>{ children }</BreadcrumbCurrentLink>
    </BreadcrumbRoot>
  )
}
