import { Box, LinearProgress, LinearProgressProps, Stack, styled, Typography } from '@mui/material'
import { store } from '../../store'

const ReviewRateChart = () => {
  const allBookRecords = store
  const totalCount = allBookRecords.totalCount
  const writtenReviewCount = allBookRecords.values.filter((record) => record.review !== 'No Review').length
  const progress = (writtenReviewCount / totalCount) * 100

  const ProgressBar = styled(LinearProgress)<LinearProgressProps>(() => ({
    height: '30px',
    borderRadius: '5px',
  }))

  return (
    <Box>
      <Typography variant='h6' component='h6'>感想記入率</Typography>
      <Stack sx={{pt: 3, pb: 3}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='body2'color='text.secondary' sx={{ display: 'flex' }}>{`${writtenReviewCount} / ${totalCount}`}</Typography>
          <Typography variant='body2' color='text.secondary'>{`${progress.toFixed(1)}%`}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <Box sx={{ width: '100%'}}>
            <ProgressBar variant='determinate' value={progress} />
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default ReviewRateChart
