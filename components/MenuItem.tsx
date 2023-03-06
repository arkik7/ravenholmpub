import React from 'react'
import { NextPage } from 'next'
import { Item } from '@/types'
import styles from '@/styles/Menu.module.css'
import Image from 'next/image';
import { urlFor } from '@/utils/client';


interface IProps {
  item: Item;
}

const MenuItem: NextPage<IProps> = ({ item: { name, image, price, details, allergens }}) => {
  const src = urlFor(image).url()

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <Image 
          loader={()=> src}
          src={src}
          alt="menu_item_image"
          width={50}
          height={100}
        />
      </div>
      <div className={styles.item__desc}>
        <div className={styles.item__name}>{name}</div>
        <div className={styles.item__description}>{details}</div>
        <div className={styles.item__price}>${price[0].toFixed(2)}</div>
        <div className={styles.item__allergens}>
          {allergens.map((allergen) => (
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
  )
}

export default MenuItem