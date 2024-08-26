const Modal = ({ children }) => {
  return (
    <div className='w-screen h-screen flex justify-center items-center absolute top-0 left-0 z-10'>
      <div className='bg-black opacity-60 w-full h-full absolute'></div>
      <div className='z-20'>{children}</div>
    </div>
  )
}
export default Modal
