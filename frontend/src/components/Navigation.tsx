import { Box, Button, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'

type TabButtonProps = {
  path: string,
  label: string,
}

const Header = () => {
  const router = useRouter()

  const TabButton = (props: TabButtonProps) => {
    const isActive = router.pathname === props.path

    return (
      <Link href={props.path} passHref>
        <Button sx={{borderRadius: 0, borderBottom: isActive ? 2 : 0 }}>
          {props.label}
        </Button>
      </Link>
    )
  }

  return (
    <Box>
      <Typography
        variant='h6'
        component='h1'
        style={{display: 'flex', alignItems: 'center'}}
        sx={{height: 54}}
      >
        OKARYO BOOKSHELF
      </Typography>

      <Box>
        <Stack direction='row'>
          <TabButton path='/' label='HOME' />
          <TabButton path='/list' label='LIST' />
          <TabButton path='/statistic' label='STATISTIC' />
        </Stack>
      </Box>
    </Box>
  )
}

export default Header
