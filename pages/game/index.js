import React from 'react'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'
import Head from 'next/head'
// import Notepad from '@/component/game/notepad/notepad';
// import Deletenote from '@/components/ellie/popup/deletenote';
import Main from '@/components/ellie/main/main'

export default function Index() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}
