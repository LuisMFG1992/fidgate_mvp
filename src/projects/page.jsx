import { useEffect, useState } from 'react'
import { columns } from './columns'
import { DataTable } from './data-table'

async function getData() {
  const res = await fetch(
    'https://run.mocky.io/v3/7264ef8c-21ba-4138-9c97-8610c4ee65d9'
  )
  const data = await res.json()
  return data
}

const getFilteredData = (data = [], filter = 'All', searchValue = '') => {
  return data.filter((element) => {
    const matchesStatus = filter === 'All' || element.status === filter
    const matchesSearch =
      searchValue === '' ||
      element.name.toLowerCase().includes(searchValue.toLowerCase())
    return matchesStatus && matchesSearch
  })
}

export default function Page({ filter, searchValue }) {
  const [originalData, setOriginalData] = useState([])

  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await getData()
      setOriginalData(result)
      setFilteredData(getFilteredData(result, filter, searchValue))
    }

    fetchData()
  }, [])

  useEffect(() => {
    setFilteredData(getFilteredData(originalData, filter, searchValue))
  }, [filter, searchValue, originalData])

  return (
    <div className='w-full bg-white rounded-lg'>
      <DataTable
        columns={columns}
        data={filteredData}
        originalData={originalData}
      />
    </div>
  )
}
