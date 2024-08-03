import LogoSmall from '../../assets/LogoSmall.svg'
import { ProductsIcon } from '../icons'

const SideBar = () => {
  return (
    <div className='h-full bg-white shadow-md w-[80px] py-4 px-2'>
      <img src={LogoSmall} alt='logo' className='size-16 w-full' />
      <ProductsIcon />
    </div>
  )
}

export default SideBar
