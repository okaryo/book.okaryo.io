import { Container } from '@mui/material'
import Statistic from '../../components/statistics/Statistic'

const StatisticPage = () => {
  return (
    <Container sx={{minHeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Statistic />
    </Container>
  )
}

export default StatisticPage
