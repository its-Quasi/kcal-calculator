import { useState } from "react"
import { InputField } from "./InputField"
import { useResult } from "../hooks/useResult"

export const DecomposedForm = () => {

  const [system, setSystem] = useState('decimal')
  const [formState, setFormState] = useState({
    age: 0,
    weight: 0,
    height: 0,
    system
  })

  // use a custom hook to calc result
  const { result } = useResult(formState)

  const onInputChange = ({ name, value }) => {
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onSystemChange = ({ target }) => {
    setSystem(target.value)
    onResetForm()
  }

  const onResetForm = () => {
    setFormState({
      age: 0,
      weight: 0,
      height: 0,
      system
    })
  }

  return (
    <>
      <h2 className="mt-2">Calorie Calculator</h2>

      <InputField name="age" value={formState.age} system={system} onInputChange={onInputChange} />
      <InputField name="weight" value={formState.weight} system={system} onInputChange={onInputChange} />
      <InputField name="height" value={formState.height} system={system} onInputChange={onInputChange} />

      <div className="d-flex justify-content-end mt-2">
        <label className="me-3">
          Select System
        </label>

        <select name="Select" onChange={onSystemChange}>
          <option value="decimal">Decimal</option>
          <option value="imperial">Imperial</option>
        </select>
      </div>

      <div className="d-flex flex-column mt-5">
        <h3 className="text-primary mx-auto">Result</h3>
        <p className="mx-auto">{result}</p>
      </div>
    </>
  )
}