import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { ThemeContext } from '@/context/globalContext'
import { useContext } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const TableActionDelete = () => {
  const { setShowModal } = useContext(ThemeContext)

  const handleClick = () => {
    setShowModal(true)
  }

  return (
    <DropdownMenuItem className='flex gap-2' onClick={handleClick}>
      <FaRegTrashAlt className='size-4 text-red-600' />
      <span className='text-red-600'>Delete</span>
    </DropdownMenuItem>
  )
}

export default TableActionDelete
