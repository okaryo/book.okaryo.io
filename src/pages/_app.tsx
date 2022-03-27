import { Provider } from "react-redux"
import { useStore } from "../store"
import Meta from '../components/Meta'
import Navigation from "../components/Navigation"
import { AppProps } from "next/app"
import { Container, Divider } from "@mui/material"
import Footer from "../components/Footer"

const App = ({ Component, pageProps }: AppProps) => {
  const store = useStore()

  return (
    <Provider store={store}>
      <Meta />

      <Container sx={{pl: 2, pr: 2}}>
        <Navigation />
      </Container>

      <Divider />

      <Container sx={{p: 2}}>
        <Component {...pageProps} />
      </Container>

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
    </Provider>
  )
}

export default App
