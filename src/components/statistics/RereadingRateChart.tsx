import { Box, LinearProgress, LinearProgressProps, Stack, styled, Typography } from '@mui/material'
import { store } from '../../store'

const RereadingRateChart = () => {
  const allBookRecords = store
  const totalCountOfUniquedByTitle = new Set(allBookRecords.values.map((record) => record.book.title)).size
  const rereadingCountOfUniquedByTitle = new Set(allBookRecords.rereadingRecords.values.map((record) => record.book.title)).size
  const progress = (rereadingCountOfUniquedByTitle / totalCountOfUniquedByTitle) * 100

  const ProgressBar = styled(LinearProgress)<LinearProgressProps>(() => ({
    height: '30px',
    borderRadius: '5px',
  }))

  return (
    <Box>
      <Typography variant='h6' component='h6'>再読率</Typography>
      <Typography variant='caption' component='p'>※今まで読んだ本のタイトルのうち再読したものの割合</Typography>
      <Stack sx={{pt: 3, pb: 3}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='body2'color='text.secondary' sx={{ display: 'flex' }}>{`${rereadingCountOfUniquedByTitle} / ${totalCountOfUniquedByTitle}`}</Typography>
          <Typography variant="body2" color='text.secondary'>{`${progress.toFixed(1)}%`}</Typography>
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

export default RereadingRateChart
