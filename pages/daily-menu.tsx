import Head from 'next/head'
import React from 'react'
import styles from '@/styles/DailyMenu.module.css'
import { BASE_URL } from '@/utils'
import axios from 'axios';
import { DailyMenu } from '@/types';

interface IProps {
  days: DailyMenu[];
}

const DailyMenu = ({ days }: IProps) => {
  console.log(days)
  return (
    <>
      <Head>
        <title>Daily Menu|RavenHolmPub</title>
        <meta name="description" content="Restaurant website demo, Daily Menu page" />
      </Head>
      <div className={styles.notepadbody}>
        <div className={styles.notepad}>
          <div className={styles.top}></div>
          <div className={styles.paper}>
            <h2>Monday</h2>
            <ul>
              <li>Item sadsadsa dasdsadasd dasdsadsad</li>
              <li>Item sadsadsa dasdsadasd dasdsadsad</li>
              <li>Item sadsadsa dasdsadasd dasdsadsad</li>
            </ul>

            <h2>Monday</h2>
            <ul>
              <li>Item sadsadsa dasdsadasd dasdsadsad</li>
              <li>Item sadsadsa dasdsadasd dasdsadsad</li>
              <li>Item sadsadsa dasdsadasd dasdsadsad</li>
            </ul>

            <h2>Monday</h2>
            <ul>
              <li>Item sadsadsa dasdsadasd dasdsadsad</li>
              <li>Item sadsadsa dasdsadasd dasdsadsad</li>
              <li>Item sadsadsa dasdsadasd dasdsadsad</li>
            </ul>

            <h2>Monday</h2>
            <ul>
              <li>Item sadsadsa dasdsadasd dasdsadsad</li>
              <li>Item sadsadsa dasdsadasd dasdsadsad</li>
              <li>Item sadsadsa dasdsadasd dasdsadsad</li>
            </ul>

            <h2>Monday</h2>
            <ul>
              <li>Item sadsadsa dasdsadasd dasdsadsad</li>
              <li>Item sadsadsa dasdsadasd dasdsadsad</li>
              <li>Item sadsadsa dasdsadasd dasdsadsad</li>
            </ul>
       
          </div>
        </div>
      </div>
    </>
  )
}

export default DailyMenu

export const getServerSideProps = async () => {

  let dayRes = await axios.get(`${BASE_URL}/api/dailyMenu`);

  return {
    props: { 
      days: dayRes.data,
    },
  };
};