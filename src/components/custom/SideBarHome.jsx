import { RxDashboard } from 'react-icons/rx'
import { RiTeamLine } from 'react-icons/ri'
import { RiBankLine } from 'react-icons/ri'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '../ui/tooltip'
import { NavLink } from 'react-router-dom'
import { BsBoxes } from 'react-icons/bs'
import { SIDEBAR_ICONS_SIZE } from '@/constants'

const homeButtons = [
  {
    id: 'projects',
    label: 'Projects',
    to: '/projects',
    icon: <RxDashboard size={SIDEBAR_ICONS_SIZE} className='p-2' />
  },
  {
    id: 'teams',
    label: 'Users & teams',
    to: '',
    icon: (
      <RiTeamLine
        size={SIDEBAR_ICONS_SIZE}
        className='p-2 cursor-not-allowed text-disable'
      />
    )
  },
  {
    id: 'financial',
    label: 'Financial Database',
    to: '',
    icon: (
      <RiBankLine
        size={SIDEBAR_ICONS_SIZE}
        className='p-2 cursor-not-allowed text-disable'
      />
    )
  },
  {
    id: 'products',
    label: 'Product Database',
    to: '',
    icon: (
      <BsBoxes
        size={SIDEBAR_ICONS_SIZE}
        className='p-2 cursor-not-allowed text-disable'
      />
    )
  }
]

const SideBarHome = () => {
  return homeButtons.map((link) =>
    link.to ? (
      <NavLink
        key={link.id}
        to={link.to}
        className={({ isActive }) =>
          isActive
            ? 'bg-sidebarSelected rounded-md flex justify-center items-center'
            : 'flex justify-center items-center'
        }
      >
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger>{link.icon}</TooltipTrigger>
            <TooltipContent>
              <p>{link.label}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </NavLink>
    ) : (
      <div
        key={link.id}
        className='flex justify-center items-center cursor-not-allowed text-disable'
      >
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger>{link.icon}</TooltipTrigger>
            <TooltipContent>
              <p>{link.label}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    )
  )
}

export default SideBarHome
