import { useCalculatorForm } from "../hooks/useCalculatorForm";

export const CalculatorForm = () => {

  const { formState, result, onInputChange, onSystemChange, onBlurChange } = useCalculatorForm({
    age: 0,
    weight: 0,
    height: 0
  })

  const { age, weight, height } = formState

  return (
    <>

      <h2 className="mt-2">Calorie Calculator</h2>
      <input
        className="form-control"
        type="number"
        placeholder="Age"
        name="age"
        value={age || ''}
        onChange={onInputChange}
        onBlur={onBlurChange}
      />
      <input
        className="form-control mt-2"
        type="number"
        placeholder="weight"
        name="weight"
        min="0"
        value={weight || ''}
        onChange={onInputChange}
        onBlur={onBlurChange}
      />
      <input
        className="form-control mt-2"
        type="number"
        placeholder="height"
        name="height"
        min="0"
        value={height || ''}
        onChange={onInputChange}
        onBlur={onBlurChange}
      />

      <div className="d-flex justify-content-end mt-2">
        <label className="me-3">
          Select System
        </label>

        <select name="Select" onChange={onSystemChange}>
          <option value="imperial">Imperial</option>
          <option value="decimal">Decimal</option>
        </select>
      </div>

      <div className="d-flex flex-column mt-5">
        <h3 className="text-primary mx-auto">
          Result
        </h3>
        <p className="mx-auto">
          {result}
        </p>
      </div>

    </>
  )
}
