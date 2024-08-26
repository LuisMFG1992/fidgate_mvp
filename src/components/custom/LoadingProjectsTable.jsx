import { Skeleton } from '../ui/skeleton'
import { TableBody, TableCell, TableRow } from '../ui/table'

const rows = [1, 2, 3, 4, 5, 6]
const cells = [1, 2, 3, 4, 5]

const LoadingProjectsTable = () => {
  return (
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row}>
          {cells.map((cell) => (
            <TableCell key={cell}>
              <Skeleton className='w-full h-10' />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
}

export default LoadingProjectsTable
