import MenuBarApp from '@/components/custom/MenuBarApp'
import TableApp from '@/components/custom/TableApp'
import { Button } from '@/components/ui/button'
import Page from '@/projects/page'
import { FaPlus } from 'react-icons/fa6'

const Projects = () => {
  return (
    <div className='h-screen flex flex-col items-center p-4 gap-4'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h2 className='text-4xl font-semibold'>Welcome to FIDgate!</h2>
        <p className='text-bodyTextColor'>
          Select the project you want to start working today or click on “new”
          on the left side to create a new one.
        </p>
      </div>

      <div className='flex w-full justify-between'>
        <MenuBarApp />
        <Button className='flex gap-2 bg-green-600'>
          <p className='h-full'>New project</p>
          <FaPlus className='size-4' />
        </Button>
      </div>

      <Page />
    </div>
  )
}

export default Projects
