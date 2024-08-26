import { MoreHorizontal } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

export default function TableApp() {
  return (
    <Card x-chunk='dashboard-06-chunk-0' className='w-full'>
      <CardHeader>
        <CardTitle>Products</CardTitle>
        <CardDescription>
          Manages your projects and view their performance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='hidden w-[100px] sm:table-cell'>
                {/* <span className='sr-only'> */}
                Image
                {/* </span> */}
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Modified Date</TableHead>
              <TableHead>Actions</TableHead>
              <TableHead>
                <span className='sr-only'>Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              {/* Image */}
              <TableCell>
                <div className='aspect-square rounded-md object-cover size-[64px] bg-gray-500' />
              </TableCell>

              {/* Name */}
              <TableCell className='font-medium'>
                Laser Lemonade Machine
              </TableCell>

              {/* Status */}
              <TableCell>
                <Badge variant='outline'>Draft</Badge>
              </TableCell>

              {/* Modified date */}
              <TableCell className='hidden md:table-cell'>
                2023-07-12 10:42 AM
              </TableCell>

              {/* Actions */}
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup='true' size='icon' variant='ghost'>
                      <MoreHorizontal className='h-4 w-4' />
                      <span className='sr-only'>Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className='text-xs text-muted-foreground'>
          Showing <strong>1-10</strong> of <strong>32</strong> products
        </div>
      </CardFooter>
    </Card>
  )
}
