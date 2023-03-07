import React from 'react'
import styles from '@/styles/Menu.module.css'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';


const MenuFooter = () => {
  return (
    <footer className={styles.footer}>
          <p>Social Media</p>
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