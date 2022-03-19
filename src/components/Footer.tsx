import { Box, Link, Typography } from "@mui/material"

const Footer = () => {
  return (
    <footer>
      <Box sx={{p: 3, textAlign: 'center'}}>
        <Typography variant="caption" component="p">
          Copyright ©{new Date().getFullYear()}{' '}
          <Link
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
