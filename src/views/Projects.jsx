import MenuBarApp from '@/components/custom/MenuBarApp'
import { Button } from '@/components/ui/button'
import Page from '@/projects/page'
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'

const Projects = () => {
  const [filter, setFilter] = useState('All')

  const handelFilter = (id) => {
    setFilter(id)
  }

  return (
    <div className='h-screen flex flex-col items-center p-4 gap-6'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h2 className='text-4xl font-bold'>Welcome to FIDgate!</h2>
        <p className='text-bodyTextColor'>
          Choose a project from the list below to start working on it. To create
          a new project, click the {"'New Project'"} button on the right
        </p>
      </div>

      <div className='flex w-full justify-between'>
        <MenuBarApp callback={handelFilter} />
        <Button className='flex gap-2 bg-green-600 hover:opacity-70 hover:bg-green-600'>
          <p className='h-full'>New project</p>
          <FaPlus className='size-4' />
        </Button>
      </div>
      <div className='flex flex-col w-full'>
        <Page filter={filter} />
      </div>
    </div>
  )
}

export default Projects
