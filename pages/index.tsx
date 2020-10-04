import Head from 'next/head'
import { GlobalStyle } from '../components/GlobalStyle'

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>David Sorrentino - Frontend Architect</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div>Work in progress.</div>
    </>
  )
}
