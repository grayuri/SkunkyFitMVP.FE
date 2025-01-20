import { IDiet } from "@/types/IDiet";
import Macro from "../Macro/Macro"

import './MacronutrientsCounter.scss';

interface Props extends IDiet {
  dietStats: any
}

export default function MacronutrientsCounter(props: Props) {
  const messages = []
  
  if (props.carbs > props.dietStats.carbs) {
    messages.push({
      class: "error",
      text: "The quantity of carbs was exceeded!"
    })
  }

  if (props.protein > props.dietStats.protein) {
    messages.push({
      class: "error",
      text: "The quantity of protein was exceeded!"
    })
  }

  if (props.fat > props.dietStats.fat) {
    messages.push({
      class: "error",
      text: "The quantity of fat was exceeded!"
    })
  }

  if (props.calories > props.dietStats.calories) {
    messages.push({
      class: "error",
      text: "The quantity of calories was exceeded!"
    })
  }

  return (
    <div className="macronutrients-counter">
      <div className="macros">
        <Macro 
          name="Carbs" 
          quantityUsed={props.carbs}
          totalQuantity={props.dietStats.carbs}
          unity="g" 
          barColor="#2051B0"
          backColor="#5685E0"
        />
        <Macro 
          name="Protein" 
          quantityUsed={props.protein}
          totalQuantity={props.dietStats.protein} 
          unity="g" 
          barColor="#FB771C"
          backColor="#FDB380"
        />
        <Macro 
          name="Fat" 
          quantityUsed={props.fat}
          totalQuantity={props.dietStats.fat} 
          unity="g" 
          barColor="#F8BC37"
          backColor="#FCDC97"
        />
        <Macro 
          name="Kcal" 
          quantityUsed={props.calories}
          totalQuantity={props.dietStats.calories}
          barColor="#367BF7"
          backColor="#9ABCFB"
        />
      </div>
      {
        messages.length > 0 && (
          <ul className="messages">
            {
              messages.map(message => (
                <li key={message.text} className={message.class}>{message.text}</li>
              ))
            }
          </ul>
        )
      }
    </div>
  )
}
