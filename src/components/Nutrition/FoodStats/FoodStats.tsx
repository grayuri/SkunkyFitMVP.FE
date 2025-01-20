import "./FoodStats.scss"

interface Props {
  carbs: number
  protein: number
  fat: number
  calories: number
}

export default function FoodStats({ carbs, protein, fat, calories }: Props) {
  return (
    <ul className="food-stats">
      <li>
        <div className="circle"></div>
        <span>{carbs.toFixed(2)} g Carbs</span>
      </li>
      <li>
        <div className="circle"></div>
        <span>{protein.toFixed(2)} g Protein</span>
      </li>
      <li>
        <div className="circle"></div>
        <span>{fat.toFixed(2)} g Fat</span>
      </li>
      <li>
        <div className="circle"></div>
        <span>{calories.toFixed(2)} Kcal</span>
      </li>
    </ul>
  )
}
