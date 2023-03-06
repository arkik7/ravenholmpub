import React from 'react'
import { NextPage } from 'next'
import { Food } from '@/types'
import styles from '@/styles/Menu.module.css'


interface IProps {
  item: Food;
}

const MenuItem: NextPage<IProps> = ({ item: { name, price, description }}) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/toast-1.png" />
      </div>
      <div className={styles.item__desc}>
        <div className={styles.item__name}>{name}</div>
        <div className={styles.item__description}>{description}</div>
        <div className={styles.item__price}>${price.toFixed(2)}</div>
        <div className={styles.item__calories}>300 calories</div>
        <div className={styles.item__allergens}>
          <span className={`${styles.allergen} ${styles.wheat}`}>W</span>
          <span className={`${styles.allergen} ${styles.dairy}`}>D</span>
          <span className={`${styles.allergen} ${styles.sea}`}>S</span>
          <span className={`${styles.allergen} ${styles.eggs}`}>E</span>
        </div>
      </div>
    </div>
  )
}

export default MenuItem