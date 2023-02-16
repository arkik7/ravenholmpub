import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import styles from '@/styles/Footer.module.css'


const Footer = () => {
  return (
    <footer className={`${styles.footer} section__padding`}>
      

      <div className={styles.footerlinks}>
        <div className={styles.footerlinks_contact}>
          <h1 className={styles.footerheadtext}>Contact Us</h1>
          <p className="p__opensans">Your address goes here</p>
          <p className="p__opensans">+1 234-567-8910</p>
          <p className="p__opensans">+1 234-567-8910</p>
        </div>

        <div className={styles.footerlinks_logo}>
          <img src="https://cdn.sanity.io/images/hj3gu6sn/production/c5685eebc5abf4a06e17f13fb6486f1fda1fc410-330x369.png" alt="footer_logo" />
          <p className="p__opensans">&quot;Your quote goes here.&quot;</p>
          
          <div className={styles.footerlinks_icons}>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className={styles.footerlinks_work}>
          <h1 className={styles.footerheadtext}>Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 - 20:00 </p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">11:00  - 23:00 </p>
        </div>
      </div>

      <div className={styles.footer__copyright}>
        <p className="p__opensans"> © 2022 RavenHolmDev_</p>
      </div>

    </footer>
  )
}

export default Footer