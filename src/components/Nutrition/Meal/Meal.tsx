"use client"

import { useState } from 'react';
import { IMeal } from '../../../types/IMeal'

import { Collapsible, DialogBackdrop } from '@chakra-ui/react';
import MealFoodsList from '../MealFoodsList/MealFoodsList';
import MealOptions from '../MealOptions/MealOptions';

import { IoTimeOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";

import './Meal.scss'
import getTime from '@/utils/getTime';
import { DialogRoot } from '@/components/UI/dialog';
import { usePathname, useRouter } from 'next/navigation';
import MealModalForm from '../MealModalForm/MealModalForm';
import MealFoodModalForm from '../MealFoodModalForm/MealFoodModalForm';

interface Props extends IMeal {}

export default function Meal(props: Props) {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const router = useRouter()
  const pathname = usePathname()
  const dietPage = pathname.split("/").splice(0, 4).join("/")

  function toggleCollapseButton() {
    if (isCollapsed) setIsCollapsed(false)
    else setIsCollapsed(true)
  }

  return (
    <Collapsible.Root open={isCollapsed}>
      <div className='meal'>
        <div className="meal-informations">
          <div className="left">
            <h3>{props.name}</h3>
            <div className="time">
              <IoTimeOutline className='icon' />
              <span>{getTime(props.time)}</span>
            </div>
          </div>

          <div className="right">
            <ul className="meal-macros-overview">
              <li>
                <div className="circle" />
                <p>{props.carbs.toFixed(2)}g Carbs</p>
              </li>
              <li>
                <div className="circle" />
                <p>{props.protein.toFixed(2)}g Protein</p>
              </li>
              <li>
                <div className="circle" />
                <p>{props.fat.toFixed(2)}g Fat</p>
              </li>
              <li>
                <div className="circle" />
                <p>{props.calories.toFixed(2)} Kcal</p>
              </li>
            </ul>
            <Collapsible.Trigger onClick={toggleCollapseButton}>
              {
                isCollapsed
                  ? (
                    <IoChevronUp className='collapse-icon' />
                  )
                  : (
                    <IoChevronDown className='collapse-icon' />
                  )
              }
            </Collapsible.Trigger>
            <DialogRoot
              placement="center"
              motionPreset="slide-in-bottom"
              onExitComplete={() => router.push(dietPage, { scroll: false })}
            >
              <DialogBackdrop />
              <MealModalForm dietSlug={props.dietSlug} />
              <MealOptions dietSlug={props.dietSlug} slug={props.slug} />
            </DialogRoot>
          </div>
        </div>

        <Collapsible.Content>
          <DialogRoot
            placement="center"
            motionPreset="slide-in-bottom"
            onExitComplete={() => router.push(dietPage, { scroll: false })}
          >
            <DialogBackdrop />
            <MealFoodModalForm foods={props.foods} />
            <MealFoodsList mealFoods={props.foods} mealSlug={props.slug} dietSlug={props.dietSlug} />
          </DialogRoot>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  )
}
