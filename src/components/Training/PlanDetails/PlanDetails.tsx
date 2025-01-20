import enumerateValues from '@/utils/enumerateValues'
import './PlanDetails.scss'
import getFormatedTime from '@/utils/getFormatedTime'
import { IoFlameOutline } from "react-icons/io5";

interface Props {
  burnedCaloriesTotal: number
  exercisesTotal: number
  timeTotal: number
  setsTotal: number
  targetedMuscles: string[]
}

export default function PlanDetails(props: Props) {
  return (
    <div className="plan-details">
      <div className="calories-burned">
        <IoFlameOutline className="icon" />
        <span>{props.burnedCaloriesTotal.toFixed(2)} Kcal</span>
      </div>
      <ul className="trainning-informations">
        <li>
          <h2>Total of Exercises</h2>
          <span>{props.exercisesTotal} Exercises</span>
        </li> 
        <li>
          <h2>Total of Series</h2>
          <span>{props.setsTotal} Series</span>
        </li> 
        <li>
          <h2>Total Time</h2>
          <span>{getFormatedTime(props.timeTotal)}</span>
        </li> 
        <li>
          <h2>Targeted Muscles</h2>
          <span>
            {
              props.targetedMuscles.length > 0
              ? enumerateValues(props.targetedMuscles)
              : "None"
            }
          </span>
        </li> 
      </ul>
    </div>
  )
}
