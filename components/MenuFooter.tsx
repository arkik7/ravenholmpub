import React from 'react'
import MenuItem from './MenuItem'
import { NextPage } from 'next';
import { Food } from '@/types';
import styles from '@/styles/Menu.module.css'
import MainsGridList from './MainsGridList';
import SidesGridList from './SidesGridList';
import TartsGridList from './TartsGridList';
import SpecialsGridList from './SpecialsGridList';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';


const MenuFooter = () => {
  return (
    <footer className={styles.footer}>
          <p> Let's get toasty on social media!</p>
          <a 
            className={styles.socialitem} 
            href="#" 
            target="_blank">
            <i>
              <FiTwitter/>
            </i>
          </a>
          <a 
            className={styles.socialitem} 
            href="#" 
            target="_blank">
            <i>
              <FiFacebook/>
            </i>
          </a>
          <a 
          className={styles.socialitem} 
          href="#" 
          target="_blank">
            <i>
              <FiInstagram/>
            </i>
          </a>
        </footer>
  )
}

export default MenuFooter