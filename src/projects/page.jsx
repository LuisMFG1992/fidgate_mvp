import { useContext, useEffect, useState } from 'react'
import { columns } from './columns'
import { DataTable } from './data-table'
import { ThemeContext } from '@/context/globalContext'

async function getData() {
  const res = await fetch('http://localhost:4000/projects')
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
  const { originalData, setOriginalData } = useContext(ThemeContext)
  const [isLoading, setIsLoading] = useState(true)

  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)

      const result = await getData()
      setOriginalData(result)
      setFilteredData(getFilteredData(result, filter, searchValue))
      setIsLoading(false)
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
        isLoading={isLoading}
      />
    </div>
  )
}
