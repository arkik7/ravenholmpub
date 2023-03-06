import React from 'react'
import { food } from '@/utils/constants';
import Head from 'next/head';
import MenuBody from '@/components/MenuBody';
import { BASE_URL } from '@/utils';
import axios from 'axios';
import { Item } from '@/types';

interface IProps {
  items: Item[];
}

const Menu = ({ items }: IProps) => {
  console.log(items)
  return (
    <>
      <Head>
        <title>Menu|RavenHolmPub</title>
        <meta name="description" content="Restaurant website demo, menu page" />
      </Head>
      <MenuBody data={items}/>
    </>
  )
}

export default Menu

export const getServerSideProps = async () => {

  let itemRes = await axios.get(`${BASE_URL}/api/item`);

  return {
    props: { 
      items: itemRes.data,
    },
  };
};