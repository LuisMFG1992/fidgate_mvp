import { createContext, useState } from 'react'

export const ThemeContext = createContext(undefined)

export const MyContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false)
  const [originalData, setOriginalData] = useState([])

  return (
    <ThemeContext.Provider
      value={{ showModal, setShowModal, originalData, setOriginalData }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
