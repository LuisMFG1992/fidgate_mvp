import { NavLink } from 'react-router-dom'
import LogoSmall from '../../assets/LogoSmall.svg'
import { RxDashboard } from 'react-icons/rx'
import { RiTeamLine } from 'react-icons/ri'
import { RiBankLine } from 'react-icons/ri'
import { BsBoxes } from 'react-icons/bs'

const sidebarLinks = [
  {
    id: 'projects',
    to: '/projects',
    icon: <RxDashboard size={42} className='p-2' />
  },
  {
    id: 'teams',
    to: '/teams',
    icon: <RiTeamLine size={42} className='p-2' />
  },
  {
    id: 'financial',
    to: '/financial',
    icon: <RiBankLine size={42} className='p-2' />
  },
  {
    id: 'products',
    to: '/products',
    icon: <BsBoxes size={42} className='p-2' />
  }
]

const SideBar = () => {
  return (
    <div className='h-full bg-white shadow-md w-[60px] py-4 px-2 flex flex-col gap-6'>
      <img src={LogoSmall} alt='logo' className='size-16 w-full' />
      <div className='flex flex-col items-center gap-8 py-4 px-2'>
        {sidebarLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.to}
            className={({ isActive }) =>
              isActive ? 'bg-sidebarSelected rounded-md' : ''
            }
          >
            {link.icon}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default SideBar
