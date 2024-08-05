import { useContext } from 'react'
import { Button } from '../ui/button'
import CardApp from './CardApp'
import Modal from './Modal'
import { PiWarningBold } from 'react-icons/pi'
import { ThemeContext } from '@/context/globalContext'

const DeleteModal = () => {
  const { setShowModal } = useContext(ThemeContext)

  return (
    <Modal>
      <CardApp>
        <div className='flex flex-col gap-4 items-center max-w-[350px]'>
          <div className='bg-red-100 p-2 rounded-full max-w-[55px]'>
            <PiWarningBold size={40} className='text-red-700' />
          </div>
          <p className='text-2xl font-bold text-center'>
            Are you sure you want to delete this project?
          </p>
          <p className='text-bodyTextColor  text-center'>
            This action cannot be undone. All values associated with this
            project will be lost.
          </p>
          <div className='flex flex-col w-full gap-2'>
            <Button className='bg-red-600 hover:bg-red-900'>
              Delete project
            </Button>

            <Button
              className='bg-gray-200 hover:bg-gray-300 text-black'
              onClick={() => setShowModal(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </CardApp>
    </Modal>
  )
}

export default DeleteModal
