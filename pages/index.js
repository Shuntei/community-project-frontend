// import Navbar from '@/components/linda/navbar/navbar'
// import HomeContent from '@/components/linda/homeContent/homeContent'
// import Footer from '@/components/linda/footer/footer'
import MainPage from './community/main-page'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <title>RUINS</title>
        <link rel="icon" href="/icons/favicon.png" />
      </Head>
      <MainPage/>
      {/* <Navbar />
      <HomeContent />
      <Footer /> */}
    </>
  )
}
