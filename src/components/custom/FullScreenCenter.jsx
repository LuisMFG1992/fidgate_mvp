const FullScreenCenter = ({ children }) => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-bgLight'>
      {children}
    </div>
  )
}

export default FullScreenCenter
