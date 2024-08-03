import LogoSmall from '../../assets/LogoSmall.svg'
import { FinancialIcon, ProductsIcon, ProjectsIcon, TeamsIcon } from '../icons'

const SideBar = () => {
  return (
    <div className='h-full bg-white shadow-md w-[80px] py-4 px-2 flex flex-col gap-6'>
      <img src={LogoSmall} alt='logo' className='size-16 w-full' />
      <div className='flex flex-col items-center gap-8 py-4 px-2'>
        <ProjectsIcon />
        <ProductsIcon />
        <FinancialIcon />
        <TeamsIcon />
      </div>
    </div>
  )
}

export default SideBar
