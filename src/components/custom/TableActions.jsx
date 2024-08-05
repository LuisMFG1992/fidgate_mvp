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

const TableActions = () => {
  const { setShowModal } = useContext(ThemeContext)

  const handleClick = () => {
    setShowModal(true)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <span className='sr-only'>Open menu</span>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem className='flex gap-2'>
          <LuFolderOpen className='size-4 ' />
          <span className=''>Open</span>
        </DropdownMenuItem>
        <DropdownMenuItem className='flex gap-2 '>
          <FiEdit3 className='size-4 text-disable' />
          <span className='text-disable'>Rename</span>
        </DropdownMenuItem>
        <DropdownMenuItem className='flex gap-2'>
          <BiImage className='size-4 text-disable' />
          <span className='text-disable'>Change picture</span>
        </DropdownMenuItem>
        <DropdownMenuItem className='flex gap-2'>
          <AiOutlineTeam className='size-4 text-disable' />
          <span className='text-disable'>Collaborate</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='flex gap-2' onClick={handleClick}>
          <FaRegTrashAlt className='size-4 text-red-600' />
          <span className='text-red-600'>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default TableActions
