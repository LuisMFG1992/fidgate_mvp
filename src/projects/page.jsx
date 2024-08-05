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
    },
    {
      id: '7',
      image: '',
      modifiedDate: '2024-08-04T21:58:51.452Z',
      status: 'Completed',
      name: 'M-DK-FT3P.PFT_loan_tenor_10FT_loan_tenor_10'
    },
    {
      id: '8',
      image: '',
      modifiedDate: '2024-08-04T21:58:51.452Z',
      status: 'Completed',
      name: 'M-DK-FT3P.PFT_loan_tenor_10FT_loan_tenor_10'
    },
    {
      id: '9',
      image: '',
      modifiedDate: '2024-08-04T21:58:51.452Z',
      status: 'Completed',
      name: 'M-DK-FT3P.PFT_loan_tenor_10FT_loan_tenor_10'
    },
    {
      id: '10',
      image: '',
      modifiedDate: '2024-08-04T21:58:51.452Z',
      status: 'Completed',
      name: 'M-DK-FT3P.PFT_loan_tenor_10FT_loan_tenor_10'
    },
    {
      id: '11',
      image: '',
      modifiedDate: '2024-08-04T21:58:51.452Z',
      status: 'Completed',
      name: 'M-DK-FT3P.PFT_loan_tenor_10FT_loan_tenor_10'
    },
    {
      id: '12',
      image: '',
      modifiedDate: '2024-08-04T21:58:51.452Z',
      status: 'In progress',
      name: 'M-DK-FT3P.PFT_loan_tenor_10FT_loan_tenor_10'
    }
  ]
}

const filteredData = (data = [], filter = 'All') => {
  if (filter == 'All') return data
  const filtered = data.filter((element) => element.status == filter)
  return filtered
}

export default function Page({ filter }) {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await getData()
      setData(filteredData(result, filter))
    }

    fetchData()
  }, [filter])

  return (
    <div className='w-full bg-white rounded-lg'>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
