import { useEffect, useState } from "react";

export const useCalculatorForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [result, setResult] = useState(0)

  useEffect(() => {
    const updatedResult = getResult()
    setResult(updatedResult)
  }, [formState])


  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const parseFormValues = ({ age, weight, height }) => {
    return {
      age: Number(age) || 0,
      weight: Number(weight) || 0,
      height: Number(height) || 0,
    }
  }

  const getResult = () => {
    const { age, weight, height } = parseFormValues(formState)
    return age + weight + height
  }

  //TODO
  const getFactor = (params) => {

  }

  const onResetForm = () => setFormState(initialForm)


  return { formState, result, onInputChange, onResetForm, getResult }
}
