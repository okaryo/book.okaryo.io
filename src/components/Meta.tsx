import Head from "next/head"

const Meta = () => {
  return (
    <Head>
      <title>OKARYO BOOK</title>
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="okaryo's bookshelf" />
      <meta property="og:url" content="https://book.okaryo.io" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="OKARYO BOOK" />
      <meta property="og:description" content="okaryo's bookshelf" />
      <meta property="og:site_name" content="OKARYO BOOK" />
      <meta property="og:image" content="https://book.okaryo.io/ogp.png" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Meta
