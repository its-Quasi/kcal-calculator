import { useEffect, useState } from "react"
import { decimalToImperial, imperialToDecimal } from "../helpers/handlerConversionValue"
const DECIMAL_SYSTEM = 'decimal'

export const useResult = (formState) => {

  let { age, weight, height, system } = formState
  const [result, setResult] = useState(0)

  useEffect(() => {
    setResult(
      calculateResult()
    )
  }, [formState])



  const calculateResult = () => {
    if (!weight || !height || !age) return 0
    if (system === 'decimal') {
      const imperialValues = decimalToImperial(formState)
      height = imperialValues.height
      weight = imperialValues.weight
    }
    //console.log('at calc moment' , weight)
    const factor = getFactor()
    return (10 * weight + 6.25 * height - 10 * age + 5) * factor
  }



  const getFactor = () => {
    if (weight < 165) return 1.6
    else if (weight >= 165 && weight <= 200) return 1.4
    else if (weight >= 201 && weight <= 220) return 1.2
    else return 1
  }

  return {
    result
  }
}