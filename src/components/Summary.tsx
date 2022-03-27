import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../store"

const Summary = () => {
  const bookRecords = useSelector((state: RootState) => state.domain.bookRecords)
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth() + 1

  return (
    <Stack>
      <Paper variant='outlined' elevation={0}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>サマリー</TableCell>
                <TableCell align="center">冊数</TableCell>
                <TableCell align="center">ページ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{'&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">累計記録</TableCell>
                <TableCell align="center">{bookRecords.totalCount}冊</TableCell>
                <TableCell align="center">{bookRecords.totalPage}ページ</TableCell>
              </TableRow>

              <TableRow sx={{'&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">今年の記録</TableCell>
                <TableCell align="center">{bookRecords.totalCountByYear(currentYear)}冊</TableCell>
                <TableCell align="center">{bookRecords.totalPageByYear(currentYear)}ページ</TableCell>
              </TableRow>

              <TableRow sx={{'&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">今月の記録</TableCell>
                <TableCell align="center">{bookRecords.totalCountByMonth(currentYear, currentMonth)}冊</TableCell>
                <TableCell align="center">{bookRecords.totalPageByMonth(currentYear, currentMonth)}ページ</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Stack>
  )

}

export default Summary
