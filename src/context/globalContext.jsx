import { createContext, useState } from 'react'

export const ThemeContext = createContext(undefined)

export const MyContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <ThemeContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ThemeContext.Provider>
  )
}
