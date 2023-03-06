import React from 'react'
import MenuItem from './MenuItem'
import { NextPage } from 'next';
import { Item } from '@/types';
import styles from '@/styles/Menu.module.css'

interface IProps {
    data: Item[];
}

const SidesGridList: NextPage<IProps> = ({data}) => {
  return (
    <div className={styles.sides}>
        <h3>Sides</h3>
              <div className={styles.item}>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>French Fries</div>
                  <div className={styles.item__description}>With ketchup or mayo</div>
                  <div className={styles.item__price}>$4</div>
                  <div className={styles.item__calories}>425 calories</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Sweet Potato Fries</div>
                  <div className={styles.item__description}>With chipotle lime dip</div>
                  <div className={styles.item__price}>$5.5</div>
                  <div className={styles.item__calories}>510 calories</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Hummus &amp; Tortilla Chips</div>
                  <div className={styles.item__price}>$5.5</div>
                  <div className={styles.item__calories}>333 calories</div>
                </div>
              </div>
    </div>
  )
}

export default SidesGridList