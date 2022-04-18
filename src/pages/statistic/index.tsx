import { Container } from '@mui/material'
import Statistic from '../../components/statistics/Statistic'

const StatisticPage = () => {
  return (
    <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', pb: 2}}>
      <Statistic />
    </Container>
  )
}

export default StatisticPage
