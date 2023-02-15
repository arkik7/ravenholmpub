import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import styles from '@/styles/Home.module.css'

interface Props {
    children: ReactNode
}

const Layout = (props:Props) => {

  return (
    <>
    <Navbar/>
    <main className={styles.main}>
      {props.children}
    </main>
    <Footer/>
    </>
  )
}

export default Layout