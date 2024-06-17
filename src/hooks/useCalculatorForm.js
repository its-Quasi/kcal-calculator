import { useEffect, useState } from "react";
import { getBoundValue } from "../helpers/handlerRangeValues";

export const useCalculatorForm = (initialForm = {}) => {

  const IMPERIAL_SYSTEM = 'imperial'
  const [formState, setFormState] = useState(initialForm);
  const [system, setSystem] = useState(IMPERIAL_SYSTEM)
  const [result, setResult] = useState('')


  useEffect(() => {
    const updatedResult = getResult()
    setResult(updatedResult)
  }, [formState])


  const onInputChange = ({ target }) => {
    let { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    })
  }


  const onBlurChange = ({ target }) => {
    let { name, value } = target;
    const adjustedValue = getBoundValue(system, name, value)
    setFormState({
      ...formState,
      [name]: adjustedValue
    })
  }

  const parseFormValues = ({ age, weight, height }) => {
    return {
      age: Number(age) || 0,
      weight: Number(weight) || 0,
      height: Number(height) || 0,
    }
  }

  const onSystemChange = ({ target }) => {
    setSystem(target.value)
    onResetForm()
  }

  const getResult = () => {
    const { age, weight, height } = parseFormValues(formState)
    if(!age || !weight || !height) return 'Some data is missing'
    const factor = getFactor(system, weight)
    const calorie = (10 * weight + 6.25 * height - 10 * age + 5) * factor
    return `${calorie} Kcal`
  }

  const getFactor = (system, weight) => {
    if(system === IMPERIAL_SYSTEM) {
      if(weight < 165) return 1.6
      else if(weight >= 165 && weight <= 200) return 1.4
      else if(weight >= 201 && weight <= 220) return 1.2
      else return 1
    } else {
      if(weight < 75) return 1.6
      else if(weight >= 75 && weight <= 90) return 1.4
      else if(weight >= 91 && weight <= 100) return 1.2
      else return 1
    }
  }
  
  const onResetForm = () => setFormState(initialForm)

  return { formState, result, onInputChange, onBlurChange, onResetForm, getResult, onSystemChange }
}
