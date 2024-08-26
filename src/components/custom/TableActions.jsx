import { ThemeContext } from '@/context/globalContext'
import { useContext } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'
import { MoreHorizontal } from 'lucide-react'
import { LuFolderOpen } from 'react-icons/lu'
import { FiEdit3 } from 'react-icons/fi'
import { BiImage } from 'react-icons/bi'
import { AiOutlineTeam } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const TableActions = ({ project }) => {
  const { setShowDeleteModal, setSelectedProject, setShowOpenModal } =
    useContext(ThemeContext)

  const navigate = useNavigate()

  const handleDelete = (project) => {
    setShowDeleteModal(true)
    setSelectedProject(project)
  }

  const handleOpenProject = () => {
    setShowOpenModal(true)
    setSelectedProject(project)
    navigate(`./${project.id}`)

    // Navigate to the new project page and use the project data to fill the inputs
    // If results already exists open directly in results
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='text-slate-500 font-semibold'>
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <span className='sr-only'>Open menu</span>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='text-slate-500'>
        <DropdownMenuItem
          className='flex gap-2 cursor-pointer hover:bg-gray-100'
          onClick={handleOpenProject}
        >
          <LuFolderOpen className='size-4' />
          <span>Open</span>
        </DropdownMenuItem>
        <DropdownMenuItem className='flex gap-2 cursor-not-allowed hover:bg-gray-100'>
          <FiEdit3 className='size-4 text-disable' />
          <span className='text-disable '>Rename</span>
        </DropdownMenuItem>
        <DropdownMenuItem className='flex gap-2 cursor-not-allowed hover:bg-gray-100'>
          <BiImage className='size-4 text-disable' />
          <span className='text-disable '>Change picture</span>
        </DropdownMenuItem>
        <DropdownMenuItem className='flex gap-2 cursor-not-allowed hover:bg-gray-100'>
          <AiOutlineTeam className='size-4 text-disable' />
          <span className='text-disable '>Collaborate</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className='flex gap-2 cursor-pointer hover:bg-gray-100'
          onClick={() => handleDelete(project)}
        >
          <FaRegTrashAlt className='size-4 text-red-600' />
          <span className='text-red-600'>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default TableActions
