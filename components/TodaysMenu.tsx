import React from 'react'
import styles from '@/styles/Landing.module.css'
import { NextPage } from 'next';
import { DailyMenu } from '@/types';
import { urlFor } from '@/utils/client';
import Image from 'next/image';

interface IProps {
    data: DailyMenu;
}

const TodaysMenu: NextPage<IProps> = ({data}) => {
  
  return (
    <ul className={styles.cards}>
        {(data.foods.length < 1) ? 
        (
        <li className={styles.menuheader}>
            <div className={styles.card}>
              <div className={styles.card_content}>
                <h2 className={`${styles.card_title} ${styles.h2}`}>{data.day}</h2>
                <div className={styles.card_text}>
                  <p className={styles.p}>{data.message || "Closed today"}</p>
                </div>
              </div>
            </div>
        </li>) 
        : 
        (
        <>
        {data.foods.map((food) => (
          <li key={food._id} className={styles.cards_item}>
            <div className={styles.card}>
              <div className={styles.card_image}>
                <Image
                  loader={()=> urlFor(food.image).url()} 
                  src={urlFor(food.image).url()} 
                  alt={food.name || "food image"}
                  width={100}
                  height={50}
                />
              </div>
              <div className={styles.card_content}>
                <h2 className={`${styles.card_title} ${styles.h2}`}>{food.name} • ${food.menuPrice[0]}</h2>
                <div className={styles.card_text}>
                  <p className={styles.p}>
                    {food.details}
                  </p>
                  <p className={styles.p}>
                    Allegens:
                  {food.allergens.map((allergen) => (
                    <span key={allergen._key} className={styles.p}> {allergen.title} |</span>
                  ))}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
        </>
        )}
    </ul>
  )
}

export default TodaysMenu