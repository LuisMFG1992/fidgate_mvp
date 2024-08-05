const MenuBarApp = ({ filter, callback }) => {
  const options = [
    {
      id: 'all',
      label: 'All',
      selected: true
    },
    {
      id: 'completed',
      label: 'Completed',
      selected: ''
    },
    {
      id: 'inProgress',
      label: 'In progress',
      selected: ''
    },
    {
      id: 'draft',
      label: 'Draft',
      selected: ''
    }
  ]

  console.log({ filter })

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
