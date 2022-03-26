import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <title>OKARYO BOOKSHELF</title>
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="okaryoの本棚" />
      <meta property="og:url" content="https://book.okaryo.io" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="OKARYO BOOKSHELF" />
      <meta property="og:description" content="okaryoの本棚" />
      <meta property="og:site_name" content="OKARYO BOOKSHELF" />
      <meta property="og:image" content="https://book.okaryo.io/ogp.png" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Meta
