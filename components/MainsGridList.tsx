import React from 'react'
import MenuItem from './MenuItem'
import { NextPage } from 'next';
import { Item } from '@/types';
import styles from '@/styles/Menu.module.css'

interface IProps {
    data: Item[];
}

const MainsGridList: NextPage<IProps> = ({data}) => {
  return (
    <div className={styles.mains}>
      <h3>Menu</h3>
      {data.map((item) => (
        <MenuItem key={item._id} item={item}/>
      ))}
    </div>
  )
}

export default MainsGridList