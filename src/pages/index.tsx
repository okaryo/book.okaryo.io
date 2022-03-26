import { AppBar, Divider, Typography } from '@mui/material'
import BookList from '../components/BookList'
import Footer from '../components/Footer'
import Meta from '../components/Meta'

export default function Home() {
  return (
    <div>
      <Meta />

      <main>
        <AppBar position="static" sx={{p: 1}}>
          <Typography variant="h6" component="h1">OKARYO BOOKSHELF</Typography>
        </AppBar>

        <BookList />
      </main>

      <Divider />

      <Footer />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
