import { useEffect, useState } from "react"
import { getBoundValue } from "../helpers/handlerRangeValues"
export const InputField = ({ system, name, onInputChange, value }) => {

  const [inputValue, setInputValue] = useState(value)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const onChangeInput = ({ target }) => {
    let { name, value } = target
    value = Number(value) || 0
    if (value < 0) {
      alert(`You can only enter positive numbers. The ${name} field will be filled with min acceptable value`)
    }
    setInputValue(value)
  }

  const onBlurChange = ({ target }) => {
    const { name } = target
    const adjustedValue = getBoundValue(system, name, inputValue)
    onInputChange({
      name,
      value: adjustedValue
    })
    setInputValue(adjustedValue)
  }

  return (
    <input
      className="form-control mt-2"
      type="number"
      placeholder={name}
      name={name}
      value={inputValue || ''}
      onChange={onChangeInput}
      onBlur={onBlurChange}
    />
  )
}