import { useState } from 'react'
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

import { FaPlusCircle } from 'react-icons/fa'
import LoadingProjectsTable from '@/components/custom/LoadingProjectsTable'
import { TABLE_PAGE_SIZE } from '@/constants'

export function DataTable({ columns, data, originalData, isLoading }) {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: TABLE_PAGE_SIZE
  })

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination
    },
    onPaginationChange: setPagination
  })

  const pageCount = table.getPageCount()

  return (
    <div className='rounded-md border min-h-[695px] flex flex-col justify-between'>
      <div className='p-4 flex flex-col gap-2'>
        <p className='text-2xl font-bold'>Projects of Juan Roldan</p>
        <p className='text-bodyTextColor'>
          Manages your projects and view their performance
        </p>
        <Table className='table-fixed'>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className='text-center'
                    style={{
                      width:
                        columns.find(
                          (col) =>
                            col.accessorKey ===
                            header.column.columnDef.accessorKey
                        )?.size || 'auto',
                      minWidth:
                        columns.find(
                          (col) =>
                            col.accessorKey ===
                            header.column.columnDef.accessorKey
                        )?.size || 'auto'
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          {isLoading && <LoadingProjectsTable />}
          {!isLoading &&
            (originalData.length == 0 ? (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={columns.length} className='h-[480px]'>
                    <div className='flex justify-center gap-8 items-center flex-col'>
                      <p className='text-center  text-4xl font-semibold text-gray-400'>
                        You have no projects at this time.
                      </p>
                      <p className='text-center  text-4xl font-semibold text-gray-400'>
                        Begin by creating a new project using the button below.
                      </p>
                      <FaPlusCircle size={50} className='text-black' />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      className='text-center h-[40px]'
                      key={row.id}
                      data-state={row.getIsSelected() && 'selected'}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          key={cell.id}
                          className='text-center'
                          style={{
                            width:
                              columns.find(
                                (col) =>
                                  col.accessorKey ===
                                  cell.column.columnDef.accessorKey
                              )?.size || 'auto',
                            minWidth:
                              columns.find(
                                (col) =>
                                  col.accessorKey ===
                                  cell.column.columnDef.accessorKey
                              )?.size || 'auto'
                          }}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className='h-[480px] text-center text-4xl font-semibold text-gray-400'
                    >
                      No results found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            ))}
        </Table>
      </div>

      <Pagination className='py-2'>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href='#'
              onClick={(e) => {
                e.preventDefault()
                if (table.getCanPreviousPage()) {
                  table.previousPage()
                }
              }}
              className={`${!table.getCanPreviousPage() ? 'opacity-50' : ''}`}
              disabled={!table.getCanPreviousPage()}
            />
          </PaginationItem>
          {Array.from({ length: pageCount }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href='#'
                isActive={i === pagination.pageIndex}
                className={
                  i === pagination.pageIndex ? 'bg-black text-white' : ''
                }
                onClick={(e) => {
                  e.preventDefault()
                  table.setPageIndex(i)
                }}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          {pageCount > 5 && <PaginationEllipsis />}
          <PaginationItem>
            <PaginationNext
              href='#'
              onClick={(e) => {
                e.preventDefault()
                if (table.getCanNextPage()) {
                  table.nextPage()
                }
              }}
              className={`${!table.getCanNextPage() ? 'opacity-50' : ''}`}
              disabled={!table.getCanNextPage()}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
