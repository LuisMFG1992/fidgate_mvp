import { Button } from '@/components/ui/button'
import { FaRegTrashAlt } from 'react-icons/fa'
import { LuFolderOpen } from 'react-icons/lu'
import { FiEdit3 } from 'react-icons/fi'
import { BiImage } from 'react-icons/bi'
import { AiOutlineTeam } from 'react-icons/ai'

import LogoInvertedColors from '../assets/LogoInvertedColors.png'

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
    size: 80,
    cell: ({ row }) => {
      const value = row.getValue('image')
      const placeholder = LogoInvertedColors
      return (
        <div className='w-full h-full flex justify-center items-center'>
          <img
            src={value ? value : placeholder}
            className='size-10 bg-gray-400 rounded-lg'
          ></img>
        </div>
      )
    }
  },
  {
    accessorKey: 'name',
    header: 'Name',
    size: 300,
    cell: ({ row }) => {
      const value = row.getValue('name')
      return <div className='text-start'>{value}</div>
    }
  },
  {
    accessorKey: 'status',
    header: 'Status',
    size: 120,
    cell: ({ row }) => {
      const value = row.getValue('status')
      const options = {
        Completed: (
          <div className='flex justify-center items-center'>
            <div className='bg-green-700 py-1 px-2 min-w-24 rounded-lg text-white font-semibold'>
              Completed
            </div>
          </div>
        ),
        'In progress': (
          <div className='flex justify-center items-center'>
            <div className='bg-blue-800 py-1 px-2 min-w-24 rounded-lg text-white font-semibold'>
              In progress
            </div>
          </div>
        ),
        Draft: (
          <div className='flex justify-center items-center'>
            <div className='bg-gray-500 py-1 px-2 min-w-24 rounded-lg text-white font-semibold'>
              Draft
            </div>
          </div>
        )
      }
      return options[value]
    }
  },
  {
    accessorKey: 'modifiedDate',
    header: 'Modified Date',
    size: 150,
    cell: ({ row }) => {
      const date = new Date(row.getValue('modifiedDate'))
      const formatted = date.toLocaleDateString()
      return <div className='text-center'>{formatted}</div>
    }
  },
  {
    id: 'actions',
    header: 'Actions',
    size: 100,
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
