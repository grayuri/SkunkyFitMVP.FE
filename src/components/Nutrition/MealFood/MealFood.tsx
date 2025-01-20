import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
import { IMealFood } from "../../../types/IMealFood";
import MealFoodOptions from '../MealFoodOptions/MealFoodOptions';
import MealFoodModalForm from '../MealFoodModalForm/MealFoodModalForm';
import './MealFood.scss'
import { DialogBackdrop } from '@/components/UI/dialog';
import Image from 'next/image';

interface Props extends IMealFood {}

export default function MealFood(props: Props) {
  return (
    <div className='meal-food'>
      <div className="image">
        <Image priority src={props.pictureUrl} fill alt="Food Image" />
      </div>
      <div className="informations">
        <div className="left">
          <p className="name">{props.name}</p>
          <div className="calories-burned">
            <ScaleOutlinedIcon className="icon" />
            <span>{props.servingSizeGrams}g</span>
          </div>
        </div>
        <div className="right">
          <div className="information">
            <div className="circle" />
            <span>{props.carbs}g Carbs</span>
          </div>
          <div className="information">
            <div className="circle" />
            <span>{props.protein}g Protein</span>
          </div>
          <div className="information">
            <div className="circle" />
            <span>{props.fat}g Fat</span>
          </div>
          <div className="information">
            <div className="circle" />  
            <span>{props.calories} Kcal</span>
          </div>
        </div>
      </div>
      <MealFoodOptions mealFoodSlug={props.slug} mealSlug={props.mealSlug} dietSlug={props.dietSlug} />
    </div>
  )
}
