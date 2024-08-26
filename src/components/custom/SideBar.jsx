import { NavLink, useParams } from 'react-router-dom'
import LogoSmall from '../../assets/LogoSmall.svg'
import { RxDashboard } from 'react-icons/rx'
import { RiTeamLine } from 'react-icons/ri'
import { RiBankLine } from 'react-icons/ri'
import { BsBoxes } from 'react-icons/bs'
import { HiOutlineSupport } from 'react-icons/hi'
import { PiGear } from 'react-icons/pi'
import { FiUser } from 'react-icons/fi'
import { MdLogout } from 'react-icons/md'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

import { SIDEBAR_ICONS_SIZE } from '@/constants'
import { Separator } from '../ui/separator'
import SideBarProject from './SideBarProject'
import SideBarHome from './SideBarHome'

const sidebarFixedButton = [
  {
    id: 'support',
    label: 'Support',
    icon: <HiOutlineSupport size={SIDEBAR_ICONS_SIZE} className='p-2' />
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <PiGear size={SIDEBAR_ICONS_SIZE} className='p-2' />
  },
  {
    id: 'account',
    label: 'Account',
    icon: <FiUser size={SIDEBAR_ICONS_SIZE} className='p-2' />
  },
  {
    id: 'logout',
    label: 'Log out',
    icon: <MdLogout size={SIDEBAR_ICONS_SIZE} className='p-2' />
  }
]

const SideBar = () => {
  const { id } = useParams()
  return (
    <div className='h-full bg-white shadow-md w-[70px] py-4 px-2 flex flex-col gap-6 '>
      <img src={LogoSmall} alt='logo' className='size-16' />
      <div className='flex flex-col gap-8 pt-4 h-full px-2'>
        <div className='flex flex-col flex-1 gap-2'>
          {id ? <SideBarProject /> : <SideBarHome />}
        </div>
        <Separator className='h-[2px]' />
        <div className='flex flex-col items-center justify-end gap-2'>
          {sidebarFixedButton.map((element) => (
            <div key={element.id}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger>{element.icon}</TooltipTrigger>
                  <TooltipContent>
                    <p>{element.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideBar
