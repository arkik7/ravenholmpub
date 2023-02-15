import React from 'react'
import styles from '@/styles/Home.module.css'
import MenuItem from './MenuItem'
import { NextPage } from 'next';
import { Food } from '@/types';

interface IProps {
    data: Food[];
}

const GridList: NextPage<IProps> = ({data}) => {
  return (
    <div className={styles.grid}>
        {data.map((item) => (
          <MenuItem key={item._id} item={item}/>
        ))}
    </div>
  )
}

export default GridList