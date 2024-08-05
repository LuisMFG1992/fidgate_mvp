import { useEffect, useState } from 'react'
import { columns } from './columns'
import { DataTable } from './data-table'

async function getData() {
  return [
    {
      id: '1',
      image: '',
      modifiedDate: '2024-08-04T21:58:51.452Z',
      status: 'Completed',
      name: 'M-DK-FT-Azimut-30'
    },
    {
      id: '2',
      image: '',
      modifiedDate: '2024-08-04T21:58:51.452Z',
      status: 'In progress',
      name: 'FT_EP_minus30'
    },
    {
      id: '3',
      image: '',
      modifiedDate: '2024-08-04T21:58:51.452Z',
      status: 'Completed',
      name: 'FT-EE_plus10%'
    },
    {
      id: '4',
      image: '',
      modifiedDate: '2024-08-04T21:58:51.452Z',
      status: 'Draft',
      name: 'FT_60%Debt'
    },
    {
      id: '5',
      image: '',
      modifiedDate: '2024-08-04T21:58:51.452Z',
      status: 'Completed',
      name: 'FT_loan_tenor_10'
    },
    {
      id: '6',
      image: '',
      modifiedDate: '2024-08-04T21:58:51.452Z',
      status: 'Completed',
      name: 'DK-SAT1P'
    },
    {
      id: '7',
      image: '',
      modifiedDate: '2024-08-04T21:58:51.452Z',
      status: 'Completed',
      name: 'M-DK-FT3P.PFT_loan_tenor_10FT_loan_tenor_10'
    }
  ]
}

export default function DemoPage() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await getData()
      setData(result)
    }

    fetchData()
  }, [])

  return (
    <div className='w-full bg-white rounded-lg'>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
