import { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import CardApp from './CardApp'
import Modal from './Modal'

const NewProjectModal = ({ ToggleNewProjectModal }) => {
  const [newProjectName, setNewProjectName] = useState('NOTHING')

  const handleInputChange = (e) => {
    setNewProjectName(e.target.value)
  }

  const handleSubmit = () => {
    // Send the data data to the backend to create a new project
    // Wait for the new project ID
    // Navigate to project/[projectID]
    // Default inputs values
  }

  return (
    <Modal>
      <CardApp
        className={'w-[600px] flex flex-col gap-4 justify-center items-center'}
      >
        <h3 className='text-lg font-semibold text-start w-full'>
          Enter the name of your new project:
        </h3>
        <Input onChange={handleInputChange} />
        <div className='flex w-full gap-2'>
          <Button
            className='w-full bg-primaryColor text-white hover:brightness-125'
            onClick={handleSubmit}
          >
            Create
          </Button>

          <Button
            className='bg-gray-200 w-full hover:bg-gray-300 text-black'
            onClick={ToggleNewProjectModal}
          >
            Cancel
          </Button>
        </div>
      </CardApp>
    </Modal>
  )
}

export default NewProjectModal
