const MenuBarApp = ({ filter, callback }) => {
  const options = [
    {
      id: '1',
      label: 'All',
      selected: true
    },
    {
      id: '2',
      label: 'Completed',
      selected: ''
    },
    {
      id: '3',
      label: 'In progress',
      selected: ''
    },
    {
      id: '4',
      label: 'Draft',
      selected: ''
    }
  ]

  return (
    <div className='p-2 bg-white rounded-lg shadow-sm flex justify-between gap-3'>
      {options.map((option) => (
        <button
          key={option.id}
          className={`rounded-lg min-w-[40px] p-1 font-medium px-2 ${
            filter == option.label ? 'bg-black text-white' : ''
          }`}
          onClick={() => callback(option.label)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export default MenuBarApp
