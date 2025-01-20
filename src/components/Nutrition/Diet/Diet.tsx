import Image from "next/image"
import DietOptions from "../DietOptions/DietOptions";

import './Diet.scss';
import { IDiet } from "@/types/IDiet";

interface Props extends IDiet {}

export default function Diet(props: Props) {
  return (
    <article className="diet">
      <div className="diet-banner">
        <Image
          alt="Nutrition Diet Banner Image"
          src={props.bannerUrl}
          quality={80}
          priority
          fill
        />
      </div>
      <div className="diet-content">
        <h4>{props.name}</h4>
        <div className="main-content">
          <ul className="details">
            <li>
              <div className="circle" />
              <span>{props.carbs.toFixed(2)}g Carbs</span>
            </li>
            <li>
              <div className="circle" />
              <span>{props.protein.toFixed(2)}g Protein</span>
            </li>
            <li>
              <div className="circle" />
              <span>{props.fat.toFixed(2)}g Fat</span>
            </li>
          </ul>
          <div className="options">
            <DietOptions slug={props.slug} />
          </div>
        </div>
      </div>
    </article>
  )
}
