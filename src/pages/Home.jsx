import SideBar from '@/components/custom/SideBar'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className='h-full w-full flex justify-start items-center'>
      <SideBar />
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
  )
}

export default Home
