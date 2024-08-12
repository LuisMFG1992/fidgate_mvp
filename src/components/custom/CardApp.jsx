const CardApp = ({ children, className }) => {
  return (
    <div
      className={`bg-white rounded-lg p-4 shadow-sm z-20 opacity-100 ${className}`}
    >
      {children}
    </div>
  )
}

export default CardApp
