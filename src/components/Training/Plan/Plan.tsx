import Image from "next/image"
import { IoBarbellOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { IoFlameOutline } from "react-icons/io5";

import './Plan.scss'
import { ITrainingPlan } from "../../../types/ITrainingPlan";
import PlanOptions from "../PlanOptions/PlanOptions";
import getFormatedTime from "@/utils/getFormatedTime";

interface Props extends ITrainingPlan {}

export default function Plan(props: Props) {
  return (
    <article className="plan">
        <div className="plan-banner">
          <Image
            alt="Trainning Plan Banner Image"
            src={props.bannerUrl}
            quality={80}
            priority
            fill
          />
        </div>
        <div className="plan-content">
          <h4>{props.name}</h4>
          <div className="main-content">
            <ul className="details">
              <li>
                <IoBarbellOutline className="icon" />
                <span>{props.exercisesTotal} Exercises</span>
              </li>
              <li>
                <IoTimeOutline className="icon" />
                <span>{getFormatedTime(props.timeTotal)}</span>
              </li>
              <li>
                <IoFlameOutline className="icon" />
                <span>Burns <span className="burn-highlight">{props.burnedCaloriesTotal.toFixed(2)} kcal</span></span>
              </li>
            </ul>
            <PlanOptions slug={props.slug} />
          </div>
        </div>
    </article>
  )
}
