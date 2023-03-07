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
            {days.map((day) => (
              <div key={day._id}>
                <h2>{day.day}</h2>
                {day.foods.length > 0 ?
                <ul>
                  {day.foods.map((food) => (
                    <li key={food._id}>
                      {food.name} | {food.details}: ${food.menuPrice[0]} (
                      {food.allergens.map((allergen) => (
                        <span 
                          key={allergen.code} 
                          className={`${styles.allergen} ${
                          allergen.code === 'W' ? styles.wheat 
                          : allergen.code === 'D' ? styles.dairy 
                          : allergen.code === 'S' ? styles.sea 
                          : allergen.code === 'E' ? styles.eggs 
                          : styles.nuts}`} >{allergen.code}|</span>
                      ))})
                    </li>
                  ))}
                </ul> 
                : 
                <ul>
                  <li>{day.message || "Closed"}</li>
                </ul>
                }
              </div>
            ))}
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