import { useEffect, useState } from "react"
const DECIMAL_SYSTEM = 'decimal'

export const useResult = (formState) => {

  const { age, weight, height, system } = formState
  const [result, setResult] = useState('Some data is missing')

  useEffect(() => {
    setResult(
      calculateResult()
    )
  }, [formState])



  const calculateResult = () => {
    if (!weight || !height || !age) return 0
    const factor = getFactor()
    return (10 * weight + 6.25 * height - 10 * age + 5) * factor
  }



  const getFactor = () => {
    if (system !== DECIMAL_SYSTEM) {
      if (weight < 165) return 1.6
      else if (weight >= 165 && weight <= 200) return 1.4
      else if (weight >= 201 && weight <= 220) return 1.2
      else return 1
    } else {
      if (weight < 75) return 1.6
      else if (weight >= 75 && weight <= 90) return 1.4
      else if (weight >= 91 && weight <= 100) return 1.2
      else return 1
    }
  }

  return {
    result
  }
}