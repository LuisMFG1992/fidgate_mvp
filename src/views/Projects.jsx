import { useContext, useState } from 'react'
import { ThemeContext } from '@/context/globalContext'
import Page from '@/projects/page'
import DeleteModal from '@/components/custom/DeleteModal'
import MenuBarApp from '@/components/custom/MenuBarApp'
import SearchInput from '@/components/custom/SearchInput'
import { Button } from '@/components/ui/button'
import { FaPlus } from 'react-icons/fa6'
import { useToggle } from '@/hooks/useToggle'
import NewProjectModal from '@/components/custom/NewProjectModal'

const Projects = () => {
  const [filter, setFilter] = useState('All')
  const [searchValue, setSearchValue] = useState('')

  const { state: showNewProjectModal, ToggleState: ToggleNewProjectModal } =
    useToggle()

  const { showDeleteModal } = useContext(ThemeContext)

  const handelFilter = (id) => {
    setFilter(id)
  }

  return (
    <div className='h-screen flex flex-col items-center p-4 gap-4'>
      {showDeleteModal && <DeleteModal />}
      {showNewProjectModal && (
        <NewProjectModal ToggleNewProjectModal={ToggleNewProjectModal} />
      )}
      <div className='flex flex-col justify-center items-center gap-2'>
        <h2 className='text-4xl font-bold'>Welcome to FIDgate!</h2>
        <p className='text-bodyTextColor'>We are glad to have you here.</p>
        <p className='text-bodyTextColor'>
          Choose a project from the list below to start working on it. To create
          a new project, click the {"'New Project'"} button on the right
        </p>
      </div>

      <div className='flex w-full justify-between items-center'>
        <MenuBarApp filter={filter} callback={handelFilter} />
        <SearchInput setSearchValue={setSearchValue} />
        <Button
          className='flex gap-2 bg-black hover:opacity-70 hover:bg-black'
          onClick={ToggleNewProjectModal}
        >
          <p className='h-full'>New project</p>
          <FaPlus className='size-4' />
        </Button>
      </div>
      <div className='flex flex-col w-full'>
        <Page filter={filter} searchValue={searchValue} />
      </div>
    </div>
  )
}

export default Projects
