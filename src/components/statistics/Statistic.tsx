import { Box } from '@mui/material'
import DailyProgressChart from './DailyProgressChart'
import FormatRateChart from './FormatRateChart'
import StackedProgressChart from './StackedProgressChart'

const Statistic = () => {
  return (
    <Box sx={{height: '100%', width: '100%', maxWidth: 600}}>
      <FormatRateChart />
      <Box sx={{height: 32}} />
      <StackedProgressChart />
      <Box sx={{height: 32}} />
      <DailyProgressChart />
    </Box>
  )
}

export default Statistic
