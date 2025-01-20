"use client" 

import { ITrainingPlanExercise } from '../../../types/ITrainingPlanExercise';

import { IoAddOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { IoLocateOutline } from "react-icons/io5";
import { IoListOutline } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";

import PlanExerciseOptions from '../PlanExerciseOptions/PlanExerciseOptions';
import './PlanExercise.scss';
import { moveDown, moveUp } from './Actions';
import Image from 'next/image';

interface Props extends ITrainingPlanExercise {
  index: number
  maxIndex: number
}

export default function PlanExercise(props: Props) {
  return (
    <div className="plan-exercise-container">
      <h3 className="position">{ props.index + 1 }</h3>
      <div className='plan-exercise'>
        <div className="image">
          <Image fill priority src={props.pictureUrl} alt="Exercise Image" />
        </div>
        <div className="informations">
          <div className="left">
            <p className="name">{props.name}</p>
            <div className="muscle-targeted">
              <IoLocateOutline className="icon" />
              <span>{props.muscleTargeted}</span>
            </div>
          </div>
          <div className="right">
            <div className="information">
              <IoListOutline className="icon" />
              <span>{props.sets} Sets</span>
            </div>
            <div className="information">
              <IoAddOutline className="icon" />
              <span>{props.reps} Reps</span>
            </div>
            <div className="information">
              <IoTimeOutline className="icon" />
              <span>{props.restTime}s of Rest</span>
            </div>
          </div>
        </div>
        <PlanExerciseOptions planSlug={props.trainingPlanSlug} slug={props.slug} />
      </div>
      <div className="arrows">
        {
          props.index > 0 && (
            <form action={async () => await moveUp(props.trainingPlanSlug, props.index)}>
              <button>
                <IoChevronUpOutline className='icon' />
              </button>
            </form>
          )
        }
        {
          props.index < props.maxIndex && (
            <form action={async () => await moveDown(props.trainingPlanSlug, props.index)}>
              <button>
                <IoChevronDownOutline className='icon' />
              </button>
            </form>
          )
        }
      </div>
    </div>
  )
}
