import React from 'react'
import { NextPage } from 'next';
import { Item } from '@/types';
import styles from '@/styles/Menu.module.css'
import Image from 'next/image';
import { urlFor } from '@/utils/client';

interface IProps {
    data: Item[];
}

const SpecialsGridList: NextPage<IProps> = ({data}) => {
  return (
    <div className={styles.latte}>
      <h3> Specials</h3>
      {data.map((item) => (
        <div key={item._id} className={styles.item}>
          <div className={styles.item__image}>
            <Image
              loader={()=> urlFor(item.image).url()} 
              src={urlFor(item.image).url()} 
              alt={item.name || "food image"}
              width={200}
              height={100}
            />
          </div>
          <div className={styles.item__desc}>
            <div className={styles.item__name}>{item.name}</div>
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

export default SpecialsGridList