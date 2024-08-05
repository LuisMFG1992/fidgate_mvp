import { NavLink } from 'react-router-dom'
import LogoSmall from '../../assets/LogoSmall.svg'
import { FinancialIcon, ProductsIcon, ProjectsIcon, TeamsIcon } from '../icons'

const sidebarLinks = [
  {
    id: 'projects',
    to: '/projects',
    icon: <ProjectsIcon />
  },
  {
    id: 'teams',
    to: '/teams',
    icon: <TeamsIcon />
  },
  {
    id: 'financial',
    to: '/financial',
    icon: <FinancialIcon />
  },
  {
    id: 'products',
    to: '/products',
    icon: <ProductsIcon />
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
