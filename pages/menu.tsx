import React from 'react'
import { food } from '@/utils/constants';
import Head from 'next/head';
import MenuBody from '@/components/MenuBody';

const Menu = () => {
  return (
    <>
      <Head>
        <title>Menu|RavenHolmPub</title>
        <meta name="description" content="Restaurant website demo, menu page" />
      </Head>
      <MenuBody data={food}/>
    </>
  )
}

export default Menu