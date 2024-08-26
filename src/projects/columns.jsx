import LogoInvertedColors from '../assets/LogoInvertedColors.png'

import TableActions from '@/components/custom/TableActions'

export const columns = [
  // {
  //   accessorKey: 'image',
  //   header: 'Image',
  //   size: 80,
  //   cell: ({ row }) => {
  //     const value = row.getValue('image')
  //     const placeholder = LogoInvertedColors
  //     return (
  //       <div className='w-full h-full flex justify-center items-center'>
  //         <img
  //           src={value ? value : placeholder}
  //           className='size-10 bg-gray-400 rounded-lg'
  //         ></img>
  //       </div>
  //     )
  //   }
  // },

  {
    accessorKey: 'name',
    header: 'Name',
    size: 150,
    cell: ({ row }) => {
      const value = row.getValue('name')
      return (
        <p className='text-start text-slate-500 font-semibold max-w-[500px] line-clamp-1'>
          {value}
        </p>
      )
    }
  },
  {
    accessorKey: 'country',
    header: 'Country',
    size: 100,
    cell: ({ row }) => {
      const value = row.getValue('country')
      return <p className='text-slate-500 font-semibold'>{value}</p>
    }
  },
  {
    accessorKey: 'status',
    header: 'Status',
    size: 120,
    cell: ({ row }) => {
      const value = row.getValue('status')
      const options = {
        Completed: (
          <div className='flex justify-center items-center'>
            <div className='bg-black py-1 px-2 min-w-24 rounded-lg text-white font-semibold'>
              Completed
            </div>
          </div>
        ),
        'In progress': (
          <div className='flex justify-center items-center'>
            <div className='border border-slate-500 py-1 px-2 min-w-24 rounded-lg text-slate-500 font-semibold'>
              In progress
            </div>
          </div>
        ),
        Draft: (
          <div className='flex justify-center items-center'>
            <div className='bg-gray-500 py-1 px-2 min-w-24 rounded-lg text-white font-semibold'>
              Draft
            </div>
          </div>
        )
      }
      return options[value]
    }
  },
  {
    accessorKey: 'modifiedDate',
    header: 'Modified Date',
    size: 100,
    cell: ({ row }) => {
      const date = new Date(row.getValue('modifiedDate'))
      const DD = date.getDate()
      const MM = date.getMonth() + 1
      const YYYY = date.getFullYear()
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()

      const formatted = `${DD}/${MM}/${YYYY} ${hours}:${minutes}:${seconds}`
      return (
        <div className='text-center text-slate-500 font-semibold'>
          {formatted}
        </div>
      )
    }
  },
  {
    id: 'actions',
    header: 'Actions',
    size: 100,
    cell: ({ row }) => {
      const project = row.original
      return <TableActions project={project} />
    }
  }
]
