import { Box, Typography } from '@mui/material'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { store } from '../../store'

type DataType = {
  date: string,
  Paper: number,
  Audible: number,
  Kindle: number,
  Ebook: number,
}

const DailyProgressChart = () => {
  const allBookRecords = store
  const sortedRecords = allBookRecords.sortAscByDate
  const firstDate = sortedRecords.values[0].date

  const data: DataType[] = {} as DataType[]
  const formatCountByDate = {}
  const initialValue = {Paper: 0, Audible: 0, Kindle: 0, Ebook: 0, date: firstDate.toLocaleDateString()}
  sortedRecords.values.forEach((record) => {
    if (formatCountByDate[record.date.toLocaleDateString()] === undefined) {
      formatCountByDate[record.date.toLocaleDateString()] = {...initialValue, date: record.date.toLocaleDateString()}
    }
    (formatCountByDate[record.date.toLocaleDateString()] as DataType)[record.format]++
  })

  for (let date = new Date(firstDate.getTime()); date <= new Date(); date.setDate(date.getDate() + 1)) {
    if (formatCountByDate[date.toLocaleDateString()] !== undefined) {
      data[date.toLocaleDateString()] = formatCountByDate[date.toLocaleDateString()] as DataType
    } else {
      data[date.toLocaleDateString()] = {...initialValue, date: date.toLocaleDateString()}
    }
  }

  const tooltipValueFormat = (value: number, name: string) => {
    let label = name
    if (name === 'Paper') label = '紙書籍'
    if (name === 'Ebook') label = '電子書籍'
    return [value, label]
  }

  return (
    <Box sx={{height: 250}}>
      <Typography variant='h6' component='h6'>日別読書記録</Typography>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          width={500}
          height={400}
          data={Object.values(data)}
          margin={{
            top: 30,
            right: 0,
            left: 0,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray='1 1' />
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip formatter={tooltipValueFormat} />
          <Bar type='monotone' dataKey='Paper' stackId='1' stroke='#0088FE' fill='#0088FE' />
          <Bar type='monotone' dataKey='Audible' stackId='1' stroke='#00C49F' fill='#00C49F' />
          <Bar type='monotone' dataKey='Kindle' stackId='1' stroke='#FFBB28' fill='#FFBB28' />
          <Bar type='monotone' dataKey='Ebook' stackId='1' stroke='#FF8042' fill='#FF8042' />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  )
}

export default DailyProgressChart
