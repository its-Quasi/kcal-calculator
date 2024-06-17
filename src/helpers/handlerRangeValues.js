const DECIMAL_SYSTEM_BOUNDS = {
  age: {
    MIN: 16,
    MAX: 105
  },
  weight: {
    MIN: 40.5,
    MAX: 300
  },
  height: {
    MIN: 1.4,
    MAX: 2.25
  }
}

const IMPERIAL_SYSTEM_BOUNDS = {
  age: {
    MIN: 16,
    MAX: 105
  },
  weight: {
    MIN: 89.28,
    MAX: 661.38
  },
  height: {
    MIN: 55.11,
    MAX: 88.55
  }
}

export const getBoundValue = (system, field, value) => {
  if (system === 'decimal') {
    const { MIN, MAX } = DECIMAL_SYSTEM_BOUNDS[field]
    if (value >= MIN && value <= MAX) return value
    else if (value > MAX) return MAX
    else return MIN

  } else {
    const { MIN, MAX } = IMPERIAL_SYSTEM_BOUNDS[field]
    if (value >= MIN && value <= MAX) return value
    else if (value > MAX) return MAX
    else return MIN
  }
}


