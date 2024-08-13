import { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import CardApp from './CardApp'
import Modal from './Modal'
import { Loader2 } from 'lucide-react'
import { Card } from '../ui/card'
import { useNavigate } from 'react-router-dom'

const NewProjectModal = ({ ToggleNewProjectModal }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [newProjectName, setNewProjectName] = useState('')
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setNewProjectName(e.target.value)
  }

  const handleCreate = async () => {
    setIsLoading(true)

    const newProject = {
      id: Math.floor(Math.random() * 100 + 1) + 'ABC',
      image: '',
      modifiedDate: new Date(),
      status: 'Draft',
      name: 'This is my new project'
    }

    try {
      const response = await fetch('http://localhost:4000/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProject)
      })

      if (!response.ok) {
        throw new Error('Failed to create a new project')
      }

      const data = await response.json()

      console.log('Success:', data)

      navigate(`./${newProject.id}`)
    } catch (error) {
      console.error('Error:', error)
    }

    setIsLoading(false)
  }

  const NewProjectCard = () => {
    return (
      <CardApp
        className={
          'w-[600px] h-[170px] flex flex-col gap-4 justify-center items-center'
        }
      >
        <h3 className='text-lg font-semibold text-start w-full'>
          Enter the name of your new project:
        </h3>
        <Input onChange={handleInputChange} />
        <div className='flex w-full gap-2'>
          <Button
            className='w-full bg-primaryColor text-white hover:brightness-125'
            onClick={handleCreate}
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
    )
  }

  const Loading = () => {
    return (
      <Card
        className={
          'w-[600px] h-[170px] flex flex-col gap-4 justify-center items-center'
        }
      >
        <Loader2 className='mr-2 h-16 w-16 animate-spin' />
        Setting up your workspace...
      </Card>
    )
  }

  return (
    <Modal>
      {!isLoading && <NewProjectCard />}
      {isLoading && <Loading />}
    </Modal>
  )
}

export default NewProjectModal
