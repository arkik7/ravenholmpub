import React from 'react'
import { contact } from '@/utils/constants'
import Head from 'next/head'
import styles from '@/styles/Contact.module.css'
import css from '@/styles/DailyMenu.module.css'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact|RavenHolmPub</title>
        <meta name="description" content="Restaurant website demo, Contact page" />
      </Head>

      {/**contact section  */}
      <div className={css.notepadbody}>
        <div className={css.notepad}>
          <div className={css.top}></div>
          <div className={css.paper}>
            {contact.map((item) => (
              <div key={item._id}>
                <h2>Address</h2>
                <ul>
                  <li>{item.street}</li>
                  <li>{item.postcode}</li>
                  <li>{item.city}</li>
                </ul>
                <h2>Phone</h2>
                <ul>
                  <li>{item.phone}</li>
                </ul>
                <h2>Email</h2>
                <ul>
                  <li>{item.email}</li>
                </ul>
                <h2>Opening Hours</h2>
                <ul>
                  {item.openinghours.map((time) => (
                  <li key={time.day}>
                    {time.day}: <span>{time.hour}</span>
                  </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact










      {/**contact section */}
      

      {/**3d */}
     {/* <div className={styles.contactbody}>
        <div className={styles.canvas}>
          <div className={`${styles.floor} ${styles.cube}`}><div /></div>
          <div className={styles.wall}>
            <div className={styles.cube}><div /></div>
            <div className={styles.cube}><div /></div>
            <div className={styles.cube}><div /></div>
            <div className={styles.cube}><div /></div>
            <div className={styles.cube}><div /></div>
            <div className={styles.cube}><div /></div>
            <div className={styles.cube}><div />
              {contact.map((item) => (
                <>
                <span className={styles.poster2} key={item._id}>
                  Phone<br />{item.phone}<br />Email<br />{item.email}
                </span>
              <span className={styles.noposters}>Address<br />{item.street}<br />{item.postcode}<br />{item.city}<br /></span>
              <span className={styles.poster1}>Poster<br /><br /><br /><br /><br />Placeholder</span>
              </>
              ))}
              <span className={styles.icecream}>Ice Cream</span>
              <span className={styles.poster}>Ice Cream</span>
            </div>
            <div className={styles.paint} />
            <div className={styles.paint} />
            <div className={styles.clock}>
              <div />
            </div>
          </div>
          <div className={`${styles.cube} ${styles.step}`}><div /></div>
          <div className={styles.door}>
            <div className={`${styles.cube} ${styles.doorboard}`}>
              <div />
              <span className={`${styles.cube} ${styles.handle}`}><div /></span>
              <span className={`${styles.cube} ${styles.neck}`}><div /></span>
            </div>
            <div className={`${styles.cube} ${styles.frametop}`}><div /></div>
            <div className={`${styles.cube} ${styles.frameside}`}><div /></div>
            <div className={`${styles.cube} ${styles.frameside}`}><div /></div>
          </div>
          <div className={styles.window}>
            <div className={`${styles.cube} ${styles.frametop}`}><div /></div>
            <div className={`${styles.cube} ${styles.frametop}`}><div /></div>
            <div className={`${styles.cube} ${styles.frameside}`}><div /></div>
            <div className={`${styles.cube} ${styles.frameside}`}><div /></div>
          </div>
          <div className={styles.shade}>
            <div className={styles.bar} />
            <div className={styles.bar} />
          </div>
          <div className={styles.table}>
            <div className={styles.shadow} />
            <div className={styles.base} />
            <div className={styles.boarddepth} />
            <div className={styles.board} />
            <div className={styles.board} />
            <div className={styles.board} />
            <div className={`${styles.pole} ${styles.cube}`}><div /></div>
          </div>
          <div className={styles.chair}>
            <div className={styles.shadow} />
            <div className={`${styles.seat} ${styles.cube}`}><div /></div>
            <div className={`${styles.leg} ${styles.leg1} ${styles.cube}`}><div /></div>
            <div className={`${styles.leg} ${styles.leg2} ${styles.cube}`}><div /></div>
            <div className={`${styles.leg} ${styles.leg3} ${styles.cube}`}><div /></div>
            <div className={`${styles.leg} ${styles.leg4} ${styles.cube}`}><div /></div>
            <div className={`${styles.back} ${styles.cube}`}><div /></div>
            <div className={`${styles.back} ${styles.cube}`}><div /></div>
          </div>
          <div className={styles.counter}>
            <div className={`${styles.desk} ${styles.cube}`}><div /></div>
            <div className={`${styles.displaytop} ${styles.cube}`}><div /></div>
            <div className={`${styles.countertop} ${styles.cube}`}><div /></div>
            <div className={styles.display} />
            <div className={`${styles.displayglasstop} ${styles.cube}`}><div /></div>
          </div>
        </div>
        
      </div>   */}
       {/**3d */}  