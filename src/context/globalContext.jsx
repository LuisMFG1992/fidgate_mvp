import { createContext, useState } from 'react'

export const ThemeContext = createContext(undefined)

export const MyContextProvider = ({ children }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showOpenModal, setShowOpenModal] = useState(false)
  const [originalData, setOriginalData] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <ThemeContext.Provider
      value={{
        showDeleteModal,
        setShowDeleteModal,
        showOpenModal,
        setShowOpenModal,
        originalData,
        setOriginalData,
        selectedProject,
        setSelectedProject
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
