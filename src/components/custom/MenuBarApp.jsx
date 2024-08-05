const MenuBarApp = () => {
  const options = [
    {
      id: '1',
      label: 'all',
      selected: true
    },
    {
      id: '2',
      label: 'Completed',
      selected: ''
    },
    {
      id: '3',
      label: 'In Progress',
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
          className={`rounded-lg min-w-[40px] font-medium px-2 ${
            option.selected ? 'bg-black text-white' : ''
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export default MenuBarApp
