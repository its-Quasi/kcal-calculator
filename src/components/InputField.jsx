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

  const onKeyDown = (event) => {
    if (["e", "E", "+", "-"].includes(event.key)) {
      event.preventDefault();
    }
  }

  return (
    <input
      className="form-control mt-2"
      type="number"
      placeholder={name}
      name={name}
      value={inputValue || ''}
      onChange={onChangeInput}
      onKeyDown={onKeyDown}
      onBlur={onBlurChange}
    />

  )
}