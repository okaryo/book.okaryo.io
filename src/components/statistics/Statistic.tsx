import { Box } from '@mui/material'
import DailyProgressChart from './DailyProgressChart'
import FormatRateChart from './FormatRateChart'
import RereadingRateChart from './RereadingRateChart'
import ReviewRateChart from './ReviewRateChart'
import StackedProgressChart from './StackedProgressChart'

const Statistic = () => {
  return (
    <Box sx={{height: '100%', width: '100%'}}>
      <FormatRateChart />
      <Box sx={{height: 32}} />
      <StackedProgressChart />
      <Box sx={{height: 32}} />
      <DailyProgressChart />
      <Box sx={{height: 32}} />
      <RereadingRateChart />
      <Box sx={{height: 32}} />
      <ReviewRateChart />
    </Box>
  )
}

export default Statistic
