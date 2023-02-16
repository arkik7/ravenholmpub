import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import styles from '@/styles/Footer.module.css'
import { contact } from '@/utils/constants'
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className={`${styles.footer} section__padding`}>
      

      <div className={styles.footerlinks}>
        <div className={styles.footerlinks_contact}>
          <h1 className={styles.footerheadtext}>Contact Us</h1>
          {contact.map((item) => (
          <div key={item._id}>
            <p className="p__opensans">{item.street}, {item.city}, {item.postcode}</p>
            <p className="p__opensans">{item.phone}</p>
            <p className="p__opensans">{item.email}</p>
          </div>
          ))}
        </div>

        <div className={styles.footerlinks_logo}>
          <img src="https://cdn.sanity.io/images/hj3gu6sn/production/c5685eebc5abf4a06e17f13fb6486f1fda1fc410-330x369.png" alt="footer_logo" />
          <p className="p__opensans">&quot;Restaurant website demo.&quot;</p>
          
          <div className={styles.footerlinks_icons}>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className={styles.footerlinks_work}>
          <h1 className={styles.footerheadtext}>Working Hours</h1>
          <p className="p__opensans">Monday-Saturday:</p>
          <p className="p__opensans">09:00 - 23:00 </p>
          <p className="p__opensans">Sunday:</p>
          <p className="p__opensans">Closed </p>
        </div>
      </div>

      <div className={styles.footer__copyright}>
        <p className="p__opensans">
          <Link 
            href="https://ravenholmdev.com/" 
            target="_blank"
            rel="noopener" 
          > 
          © 2022 RavenHolmDev_
          </Link>
        </p>
      </div>

    </footer>
  )
}

export default Footer