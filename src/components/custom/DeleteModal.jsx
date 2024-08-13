import { useContext } from 'react'
import { Button } from '../ui/button'
import CardApp from './CardApp'
import Modal from './Modal'
import { PiWarningBold } from 'react-icons/pi'
import { ThemeContext } from '@/context/globalContext'

const DeleteModal = () => {
  const {
    setShowDeleteModal,
    setSelectedProject,
    selectedProject,
    setOriginalData,
    originalData
  } = useContext(ThemeContext)

  const handelDelete = async () => {
    const { id } = selectedProject

    try {
      const response = await fetch(`http://localhost:4000/projects/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('Failed to delete the project')
      }

      console.log(`Project with id ${id} has been deleted successfully`)
      setOriginalData(originalData.filter((project) => project.id !== id))

      setShowDeleteModal(false)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <Modal>
      <CardApp>
        <div className='flex flex-col gap-4 items-center max-w-[350px]'>
          <div className='bg-red-100 p-2 rounded-full max-w-[55px]'>
            <PiWarningBold size={40} className='text-red-700' />
          </div>
          <p className='text-2xl font-bold text-center'>
            Are you sure you want to delete this project?
          </p>
          <p className='text-bodyTextColor  text-center'>
            This action cannot be undone. All values associated with this
            project will be lost.
          </p>
          <div className='flex flex-col w-full gap-2'>
            <Button
              className='bg-red-600 hover:bg-red-900'
              onClick={handelDelete}
            >
              Delete project
            </Button>

            <Button
              className='bg-gray-200 hover:bg-gray-300 text-black'
              onClick={() => {
                setShowDeleteModal(false)
                setSelectedProject(null)
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </CardApp>
    </Modal>
  )
}

export default DeleteModal
