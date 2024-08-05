import { useEffect, useState } from 'react'
import { columns } from './columns'
import { DataTable } from './data-table'

async function getData() {
  const res = await fetch(
    'https://run.mocky.io/v3/61fedc51-ad61-474c-a3a8-98cdb7c9a58f'
  )
  const data = await res.json()
  return data
}

const getFilteredData = (data = [], filter = 'All') => {
  if (filter === 'All') return data
  return data.filter((element) => element.status === filter)
}

export default function Page({ filter }) {
  const [originalData, setOriginalData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await getData()
      setOriginalData(result)
      setFilteredData(getFilteredData(result, filter))
    }

    fetchData()
  }, [])

  useEffect(() => {
    setFilteredData(getFilteredData(originalData, filter))
  }, [filter, originalData])

  return (
    <div className='w-full bg-white rounded-lg'>
      <DataTable columns={columns} data={filteredData} />
    </div>
  )
}
