import React from 'react'
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
        {data.map((item) => (
          <div key={item._id} className={styles.item}>
            <div className={styles.item__desc}>
              <div className={styles.item__name}>{item.name}</div>
              <div className={styles.item__description}>{item.details}</div>
              <div className={styles.item__price}>${item.price}</div>
              <div className={styles.item__calories}>
                {item.allergens.map((allergen) => (
                  <span 
                    key={allergen.code} 
                    className={`${styles.allergen} ${
                    allergen.code === 'W' ? styles.wheat 
                    : allergen.code === 'D' ? styles.dairy 
                    : allergen.code === 'S' ? styles.sea 
                    : allergen.code === 'E' ? styles.eggs 
                    : styles.nuts}`} >{allergen.code}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default SidesGridList