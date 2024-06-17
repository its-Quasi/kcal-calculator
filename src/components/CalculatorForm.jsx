import { useCalculatorForm } from "../hooks/useCalculatorForm";

export const CalculatorForm = () => {

  const { result, onInputChange } = useCalculatorForm({
    age: 0,
    weight: 0,
    height: 0
  })

  return (
    <>

      <h2 className="mt-2">Calorie Calculator</h2>

      <input
        className="form-control"
        type="number"
        placeholder="Age"
        name="age"
        onChange={onInputChange}
      />
      <input
        className="form-control mt-2"
        type="number"
        placeholder="weight"
        name="weight"
        onChange={onInputChange}
      />
      <input
        className="form-control mt-2"
        type="number"
        placeholder="height"
        name="height"
        onChange={onInputChange}
      />

      <div className="d-flex justify-content-end mt-2">
        <label className="me-3">
          Select System
        </label>

        <select name="Select" id="">
          <option>Imperial</option>
          <option>Decimal</option>
        </select>
      </div>

      <h3>res</h3>
      <p>{result}</p>
    </>
  )
}
