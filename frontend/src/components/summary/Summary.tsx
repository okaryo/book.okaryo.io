import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { store } from '../../store'

type TableBodyRowProps = {
  label: string,
  count: number,
  page: number
}

const Summary = () => {
  const bookRecords = store
  const currentDate = new Date()
  const lastYearDate = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate())
  const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate())

  const TableBodyRow = (props: TableBodyRowProps) => {
    const { label, count, page } = props
    return (
      <TableRow sx={{'&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component='th' scope='row'>{label}</TableCell>
        <TableCell align='center'>{count}冊</TableCell>
        <TableCell align='center'>{page}ページ</TableCell>
      </TableRow>
    )
  }

  return (
    <Stack>
      <Paper variant='outlined' elevation={0}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{fontWeight: 600}}>サマリー</TableCell>
                <TableCell sx={{fontWeight: 600}} align='center'>冊数</TableCell>
                <TableCell sx={{fontWeight: 600}} align='center'>ページ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableBodyRow label={'累計記録'} count={bookRecords.totalCount} page={bookRecords.totalPage} />
              <TableBodyRow label={'昨年の記録'} count={bookRecords.totalCountByYear(lastYearDate)} page={bookRecords.totalPageByYear(lastYearDate)} />
              <TableBodyRow label={'今年の記録'} count={bookRecords.totalCountByYear(currentDate)} page={bookRecords.totalPageByYear(currentDate)} />
              <TableBodyRow label={'先月の記録'} count={bookRecords.totalCountByMonth(lastMonthDate)} page={bookRecords.totalPageByMonth(lastMonthDate)} />
              <TableBodyRow label={'今月の記録'} count={bookRecords.totalCountByMonth(currentDate)} page={bookRecords.totalPageByMonth(currentDate)} />
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Stack>
  )

}

export default Summary
