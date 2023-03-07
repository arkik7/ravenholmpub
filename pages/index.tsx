import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Landing.module.css'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'


export default function Home() {
  return (
    <div className={styles.header}>
      <header className='header__custom'>
        <div className='overlay'>
          <h1>Welcome to</h1>
          <h3>Ravenholm pub</h3>
          <p>This is a fictional pub, page created for demo purposes.</p>
          <br />
          <button>Explore Menu</button>
        </div>
      </header>
      <div className={styles.main}>
        <div className={styles.menuheader}>
          <h2 className={styles.main__h2}>On Menu Today</h2>
        </div>
        <ul className={styles.cards}>
          <li className={styles.cards_item}>
            <div className={styles.card}>
              <div className={styles.card_image}><img src="https://cdn.sanity.io/images/icbaw51l/production/7eeb54fb12770cd4e0f54a68cbf4f3ff442c56e6-1920x1280.jpg" alt="mixed vegetable salad in a mason jar. " /></div>
              <div className={styles.card_content}>
                <h2 className={`${styles.card_title} ${styles.h2}`}>Farmstand Salad • $9</h2>
                <div className={styles.card_text}>
                  <p className={styles.p}>Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of leafy greens and seasonal vegetables, fresh from the farmer's market.</p>
                  <p className={styles.p}>Served with your choice of dressing on the side: housemade ranch, cherry balsamic vinaigrette, creamy chipotle, avocado green goddess, or honey mustard. Add your choice of protein for $2 more. </p>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.cards_item}>
            <div className={styles.card}>
              <div className={styles.card_image}><img src="https://cdn.sanity.io/images/icbaw51l/production/a6bd8686b8e1052a1e2603493acb551ca9207fb7-640x487.jpg" alt="a Reuben sandwich on wax paper. " /></div>
              <div className={styles.card_content}>
                <h2 className={`${styles.card_title} ${styles.h2}`}>Ultimate Reuben • $18</h2>
                <div className={styles.card_text}>
                  <p className={styles.p}>All great meals take time, but this one takes it to the next level! More than 650 hours of fermenting, brining, aging, and curing goes into each and every one of our legendary Reuben sandwiches.
                  </p>
                  <p className={styles.p}>Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipe to the cave-aged Swiss cheese, right down to the pickle. The only thing we didn't make on the premises is the toothpick ( but we're looking into how to do that). </p>
                  <p className={styles.p}>This unforgettable sandwich has all of the classic Reuben elements: corned beef, rye bread, creamy Russian dressing, sauerkraut, plus a sweet gherkin pickle. No substitions please!
                  </p>
                  
                  <p className={styles.p}>Add a side of french fries or sweet potato fries for $2 more, or our housemade pub chips for $1.</p>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.cards_item}>
            <div className={styles.card}>
              <div className={styles.card_image}><img src="https://cdn.sanity.io/images/icbaw51l/production/d311f0015fd0b8b8808ef62cacfab3845e04c204-5184x3456.jpg" alt="A side view of a plate of figs and berries. " /></div>
              <div className={styles.card_content}>
                <h2 className={`${styles.card_title} ${styles.h2}`}>Fig &amp; Berry Plate • $16</h2>
                <div className={styles.card_text}>
                  <p className={styles.p}><span className={styles.note}>Seasonal.</span></p>
                  <p className={styles.p}>A succulent sextet of fresh figs join with a selection of bodacious seasonal berries in this refreshing, shareable dessert.</p>
                  <p className={styles.p}>Choose your drizzle: cherry-balsamic vinegar, local honey, or housemade chocolate sauce. </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
