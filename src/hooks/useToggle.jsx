import { useState } from 'react'

export const useToggle = () => {
  const [state, setState] = useState(false)

  const ToggleState = () => {
    return setState((prev) => !prev)
  }

  return { state, ToggleState, setState }
}
