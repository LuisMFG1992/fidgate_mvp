import { Input } from '@/components/ui/input'

export function SearchInput({ setSearchValue }) {
  const handleChange = (e) => {
    const value = e.target.value
    setSearchValue(value)
  }
  return (
    <div className='flex w-full max-w-sm items-center space-x-2 h-10'>
      <Input
        type='email'
        placeholder='Search by project name...'
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchInput
