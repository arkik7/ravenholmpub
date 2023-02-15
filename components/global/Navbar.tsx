import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href={'/'}>
            Logo
          </Link>
        </div>
        <div className={styles.navitems}>
          <Link href={'/daily-menu'} className={styles.navitem}>
            Daily Menu
          </Link>
          <Link href={'/menu'} className={styles.navitem}>
            Menu
          </Link>
          <Link href={'/blog'} className={styles.navitem}>
            Blog
          </Link>
          <Link href={'/contact'} className={styles.navitem}>
            Contact
          </Link>
        </div>
    </nav>
  )
}

export default Navbar