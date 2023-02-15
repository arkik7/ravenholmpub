import GridList from '@/components/GridList'
import React from 'react'
import { food } from '@/utils/constants';
import Head from 'next/head';

const Menu = () => {
  return (
    <>
      <Head>
        <title>Menu|RavenHolmPub</title>
        <meta name="description" content="Restaurant website demo, menu page" />
      </Head>
      <GridList data={food}/>
    </>
  )
}

export default Menu