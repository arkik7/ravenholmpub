import GridList from '@/components/GridList'
import React from 'react'
import { food } from '@/utils/constants';

const Menu = () => {
  return (
    <>
      <GridList data={food}/>
    </>
  )
}

export default Menu