import { Button } from '@/components/ui/button'
import { FaRegTrashAlt } from 'react-icons/fa'
import { LuFolderOpen } from 'react-icons/lu'
import { FiEdit3 } from 'react-icons/fi'
import { BiImage } from 'react-icons/bi'
import { AiOutlineTeam } from 'react-icons/ai'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'

export const columns = [
  {
    accessorKey: 'image',
    header: 'Image',
    cell: () => {
      return (
        <div className='w-full h-full flex justify-center items-center'>
          <div className='size-10 bg-gray-400 rounded-lg'></div>
        </div>
      )
    }
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      const value = row.getValue('name')
      return <div className='text-start'>{value}</div>
    }
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const value = row.getValue('status')
      const options = {
        Completed: (
          <div className='bg-green-600 p-1 rounded-lg text-white'>
            Completed
          </div>
        ),
        'In progress': (
          <div className='bg-blue-600 p-1 rounded-lg text-white'>
            In progress
          </div>
        ),
        Draft: (
          <div className='bg-gray-600 p-1 rounded-lg text-white'>Draft</div>
        )
      }
      return options[value]
    }
  },
  {
    accessorKey: 'modifiedDate',
    header: 'Modified Date',
    cell: ({ row }) => {
      const date = new Date(row.getValue('modifiedDate'))
      const formatted = date.toLocaleDateString()
      return <div className='text-center'>{formatted}</div>
    }
  },

  {
    id: 'actions',
    header: 'Actions',
    cell: () => {
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
            <DropdownMenuItem className='flex gap-2'>
              <FaRegTrashAlt className='size-4 text-red-600' />
              <span className='text-red-600'>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
