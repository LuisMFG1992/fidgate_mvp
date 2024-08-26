import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

import { LuPlusSquare } from 'react-icons/lu'
import { BsFolder } from 'react-icons/bs'
import { FiSave } from 'react-icons/fi'
import { SIDEBAR_ICONS_SIZE } from '@/constants'

const projectButtons = [
  {
    id: 'new',
    label: 'New',
    icon: <LuPlusSquare size={SIDEBAR_ICONS_SIZE} className='p-2' />
  },
  {
    id: 'open',
    label: 'Open',
    icon: <BsFolder size={SIDEBAR_ICONS_SIZE} className='p-2' />
  },
  {
    id: 'save',
    label: 'Save',
    icon: <FiSave size={SIDEBAR_ICONS_SIZE} className='p-2' />
  }
]

const SideBarProject = () => {
  return (
    <div className='flex flex-col justify-end gap-2 pt-4 h-full'>
      {projectButtons.map((element) => (
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
  )
}

export default SideBarProject
