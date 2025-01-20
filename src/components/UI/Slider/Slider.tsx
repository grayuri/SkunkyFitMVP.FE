"use client"

import { Swiper } from "swiper/react";
import 'swiper/css';
import "./Slider.scss"

interface Props {
  children: React.ReactNode
  elementWidth: number
}

export default function Slider({ children, elementWidth }: Props) {
  const elementsPerView = window.innerWidth / elementWidth

  return (
    <Swiper spaceBetween={24} slidesPerView={elementsPerView} grabCursor={true} style={{ overflow: "visible" }}>
      {children}
    </Swiper>
  )
}
