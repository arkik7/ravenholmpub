import React, { useState } from 'react'
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarlogo}>
        <Link href={'/'}>
          <img 
            src="https://cdn.sanity.io/images/hj3gu6sn/production/c5685eebc5abf4a06e17f13fb6486f1fda1fc410-330x369.png" 
            alt="logo"
          />
        </Link>
      </div>
      <ul className={styles.navbarlinks}>
        <li className="p__opensans"><Link href={'/daily-menu'}>Daily Menu</Link></li>
        <li className="p__opensans"><Link href={'/menu'}>Menu</Link></li>
        <li className="p__opensans"><Link href={'/blog'}>Blog</Link></li>
        <li className="p__opensans"><Link href={'/contact'}>Contact</Link></li>
      </ul>
      <div className={styles.navbarlogin}>
        <Link href={'/contact'} className="p__opensans">Book Table</Link>
      </div>
      <div className={styles.navbarsmallscreen}>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className={`${styles.navbarsmallscreen_overlay} flex__center slide-bottom`}>
            <MdOutlineRestaurantMenu fontSize={27} className={styles.overlay__close} onClick={() => setToggleMenu(false)} />
            <ul className={styles.navbarsmallscreen_links}>
              <li><Link href={'/daily-menu'} onClick={() => setToggleMenu(false)}>Daily Menu</Link></li>
              <li><Link href={'/menu'} onClick={() => setToggleMenu(false)}>Menu</Link></li>
              <li><Link href={'/blog'} onClick={() => setToggleMenu(false)}>Blog</Link></li>
              <li><Link href={'/contact'} onClick={() => setToggleMenu(false)}>Contact</Link></li>
              <li><Link href={'/contact'} onClick={() => setToggleMenu(false)}>Book Table</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar