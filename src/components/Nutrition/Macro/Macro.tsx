import './Macro.scss'

interface Props {
  name: string
  unity?: string
  quantityUsed: number
  totalQuantity: number
  barColor: string
  backColor: string
}

export default function Macro({ 
  name, quantityUsed, totalQuantity, unity, barColor, backColor
}: Props) {
  const usagePercentage = (quantityUsed / totalQuantity) * 100
  const usageHigherThanMax = quantityUsed > totalQuantity

  if (usageHigherThanMax) barColor = "#D8442A"

  return (
    <div className="macro">
      <div 
        className="macro-bar"
        style={{ backgroundColor: backColor }}
      >
        <div 
          className="inside-bar" 
          style={{ 
            width: `${usagePercentage}%`, backgroundColor: barColor
          }}
        />
      </div>
      <span className="quantity">
        <span style={{ color: barColor }}>
        {quantityUsed.toFixed(2)}{unity}{" / "}</span>
        <span style={{ color: barColor }}>
          {totalQuantity.toFixed(2)}{unity}
        </span>
        {" "}
        {name}
      </span>
    </div>
  )
}
