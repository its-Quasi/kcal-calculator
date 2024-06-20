// Logic to conver to decimal system to imperial and viceversa

export const imperialToDecimal = ({ weight, height }) => {
  return {
    weight: weight / 2.205,
    height: height / 39.37
  }
}

export const decimalToImperial = ({ age, weight, height }) => {
  return {
    weight: weight * 2.205,
    height: height * 39.37
  }
}