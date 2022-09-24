import { Box, Typography } from '@mui/material'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { store } from '../../store'

const FormatRateChart = () => {
  const allBookRecords = store
  const data = [
    {'name': '紙書籍', 'value': allBookRecords.paperFormatRecords.totalCount, 'color': '#0088FE'},
    {'name': 'Audible', 'value': allBookRecords.audibleFormatRecords.totalCount, 'color': '#00C49F'},
    {'name': 'Kindle', 'value': allBookRecords.kindleFormatRecords.totalCount, 'color': '#FFBB28'},
    {'name': '電子書籍', 'value': allBookRecords.ebookFormatRecords.totalCount, 'color': '#FF8042'},
  ]

  return (
    <Box>
      <Typography variant='h6' component='h6'>読書形式割合</Typography>
      <Box sx={{height: 250, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <ResponsiveContainer width='50%' height='100%' minWidth={350}>
          <PieChart width={300} height={250}>
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              startAngle={90}
              endAngle={-270}
              innerRadius={65}
              outerRadius={100}
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend
              verticalAlign='middle'
              align='right'
              layout='vertical'
              iconType='square'
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  )
}

export default FormatRateChart
