import React from 'react'
import MenuItem from './MenuItem'
import { NextPage } from 'next';
import { Item } from '@/types';
import styles from '@/styles/Menu.module.css'

interface IProps {
    data: Item[];
}

const TartsGridList: NextPage<IProps> = ({data}) => {
  return (
    <div className={styles.tarts}>
              <h3>Tarts</h3>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/tart-1.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Matcha Mint</div>
                  <div className={styles.item__price}>$6.5</div>
                  <div className={styles.item__calories}>215 calories</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/tart-2.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Chocoberry</div>
                  <div className={styles.item__price}>$6</div>
                  <div className={styles.item__calories}>380 calories</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/tart-3.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Lemon Meringue</div>
                  <div className={styles.item__price}>$6</div>
                  <div className={styles.item__calories}>299 calories</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/tart-4.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Plain Cheese Tart</div>
                  <div className={styles.item__price}>$5</div>
                  <div className={styles.item__calories}>289 calories</div>
                </div>
              </div>
            </div>
  )
}

export default TartsGridList