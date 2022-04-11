import Script from 'next/script'
import Summary from '../components/Summary'

const Home = () => {
  return (
    <div>
      <Summary />

      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-CQJMP9EC41'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-CQJMP9EC41');
        `}
      </Script>
    </div>
  )
}

export default Home
