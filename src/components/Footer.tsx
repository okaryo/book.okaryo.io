import { Box, Link, Typography } from '@mui/material'

const Footer = () => {
  return (
    <footer>
      <Box sx={{p: 3, textAlign: 'center'}}>
        <Typography variant="caption" component="p">
          Copyright ©{new Date().getFullYear()}{' '}
          <Link
            href="https://okaryo.io"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            OKARYO
          </Link>
        </Typography>
      </Box>
    </footer>
  )
}

export default Footer
