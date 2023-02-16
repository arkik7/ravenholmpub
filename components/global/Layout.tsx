import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'

interface Props {
    children: ReactNode
}

const Layout = (props:Props) => {

  return (
    <>
    <Head>
      <title>RavenHolmPub</title>
      <meta name="description" content="Restaurant website demo" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar/>
    <main>
      {props.children}
    </main>
    <Footer/>
    </>
  )
}

export default Layout