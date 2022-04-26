import { Box } from '@mui/material'
import AuthorRanking from './AuthorRanking'
import DailyProgressChart from './DailyProgressChart'
import FormatRateChart from './FormatRateChart'
import PageRanking from './PageRanking'
import RereadingRanking from './RereadingRanking'
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
      <Box sx={{height: 32}} />
      <RereadingRanking />
      <Box sx={{height: 32}} />
      <AuthorRanking />
      <Box sx={{height: 32}} />
      <PageRanking />
    </Box>
  )
}

export default Statistic
