import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Menu.module.css'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'


export default function Home() {
  return (
    <>

      <div className={styles.menubody} >
        <header className={styles.header}>
          <div className={styles.name}><span>T</span><span>O</span><span>A</span><span>S</span><span>T</span><span>Y</span></div>
          <div className={styles.openinghours}>Open Monday-Saturday: 09:00 - 23:00</div>
          <div className={styles.location}>
            <p>Street</p>
            <p>phone</p>
          </div>
          <div className={styles.specialannouncements} />
        </header>
        <main>
          <div className={styles.legend}>
            <div className={styles.legend__item}><i>N</i><span>Nuts</span></div>
            <div className={styles.legend__item}><i>E</i><span>Eggs</span></div>
            <div className={styles.legend__item}><i>W</i><span>Wheat</span></div>
            <div className={styles.legend__item}><i>D</i><span>Dairy</span></div>
            <div className={styles.legend__item}><i>S</i><span>Seafood</span></div>
          </div>
          <div className={styles.menu}>

            <div className={styles.mains}>
              <h3>Avocado Toasts</h3>

              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/toast-1.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Red and Blue</div>
                  <div className={styles.item__description}>Avocado, hot sauce, blue cheese. Spicy.</div>
                  <div className={styles.item__price}>$7</div>
                  <div className={styles.item__calories}>300 calories</div>
                  <div className={styles.item__allergens}><span className={`${styles.allergen} ${styles.wheat}`}>W</span><span className={`${styles.allergen} ${styles.dairy}`}>D</span></div>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/toast-2.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Cool, cool, cool</div>
                  <div className={styles.item__description}>Avocado, cucumbers, scallions, various spices.</div>
                  <div className={styles.item__price}>$6.5</div>
                  <div className={styles.item__calories}>220 calories</div>
                  <div className={styles.item__allergens}><span className={`${styles.allergen} ${styles.wheat}`}>W</span></div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/toast-3.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Avocotta</div>
                  <div className={styles.item__description}>Avocado, ricotta, eggs, lemon zest, olive oil, basil.</div>
                  <div className={styles.item__price}>$7.5</div>
                  <div className={styles.item__calories}>318 calories</div>
                  <div className={styles.item__allergens}>
                    <span className={`${styles.allergen} ${styles.eggs}`}>E</span>
                    <span className={`${styles.allergen} ${styles.wheat}`}>W</span>
                    <span className={`${styles.allergen} ${styles.dairy}`}>D</span></div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/toast-4.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>The One True Pair</div>
                  <div className={styles.item__description}>Avocado, smoked salmon, tomatoes, capers, onions, goat cheese.</div>
                  <div className={styles.item__price}>$10.5</div>
                  <div className={styles.item__calories}>320 calories</div>
                  <div className={styles.item__allergens}><span className={`${styles.allergen} ${styles.wheat}`}>W</span><span className={`${styles.allergen} ${styles.dairy}`}>D</span><span className={`${styles.allergen} ${styles.sea}`}>S</span></div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/toast-8.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Fishing Trip</div>
                  <div className={styles.item__description}>Avocado, anchovies, lemon juice, paprika.</div>
                  <div className={styles.item__price}>$9</div>
                  <div className={styles.item__calories}>296 calories</div>
                  <div className={styles.item__allergens}><span className={`${styles.allergen} ${styles.wheat}`}>W</span><span className={`${styles.allergen} ${styles.dairy}`}>D</span><span className={`${styles.allergen} ${styles.sea}`}>S</span></div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/toast-5.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Sweet &amp; Spicy Like Me</div>
                  <div className={styles.item__description}>Avocado, mangoes, lemon juice, chili powder, mint.</div>
                  <div className={styles.item__price}>$7.5</div>
                  <div className={styles.item__calories}>240 calories</div>
                  <div className={styles.item__allergens}><span className={`${styles.allergen} ${styles.wheat}`}>W</span></div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/toast-6.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Orange You Glad</div>
                  <div className={styles.item__description}>Avocado, citrus fruit of the week, mint, feta cheese.</div>
                  <div className={styles.item__price}>$7</div>
                  <div className={styles.item__calories}>238 calories</div>
                  <div className={styles.item__allergens}><span className={`${styles.allergen} ${styles.wheat}`}>W</span><span className={`${styles.allergen} ${styles.dairy}`}>D</span></div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/toast-7.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>White &amp; Green Circles</div>
                  <div className={styles.item__description}>Avocado, radishes, baby peas, lemon juice, basil.</div>
                  <div className={styles.item__price}>$6.5</div>
                  <div className={styles.item__calories}>220 calories</div>
                  <div className={styles.item__allergens}><span className={`${styles.allergen} ${styles.wheat}`}>W</span></div>
                </div>
              </div>

            </div>

            <div className={styles.sides}>
              <h3>Sides</h3>
              <div className={styles.item}>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>French Fries</div>
                  <div className={styles.item__description}>With ketchup or mayo</div>
                  <div className={styles.item__price}>$4</div>
                  <div className={styles.item__calories}>425 calories</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Sweet Potato Fries</div>
                  <div className={styles.item__description}>With chipotle lime dip</div>
                  <div className={styles.item__price}>$5.5</div>
                  <div className={styles.item__calories}>510 calories</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Hummus &amp; Tortilla Chips</div>
                  <div className={styles.item__price}>$5.5</div>
                  <div className={styles.item__calories}>333 calories</div>
                </div>
              </div>
            </div>

            <div className={styles.tarts}>
              <h3>Tarts</h3>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/tart-1.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Matcha Mint</div>
                  <div className={styles.item__price}>$6.5</div>
                  <div className={styles.item__calories}>215 calories</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/tart-2.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Chocoberry</div>
                  <div className={styles.item__price}>$6</div>
                  <div className={styles.item__calories}>380 calories</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/tart-3.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Lemon Meringue</div>
                  <div className={styles.item__price}>$6</div>
                  <div className={styles.item__calories}>299 calories</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/tart-4.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Plain Cheese Tart</div>
                  <div className={styles.item__price}>$5</div>
                  <div className={styles.item__calories}>289 calories</div>
                </div>
              </div>
            </div>

            <div className={styles.latte}>
              <h3> Special Lattes</h3>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/cof-chai.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Chai Latte</div>
                  <div className={styles.item__price}>$9</div>
                  <div className={styles.item__calories}>132 calories</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/cof-turmeric.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Turmeric Latte</div>
                  <div className={styles.item__price}>$9</div>
                  <div className={styles.item__calories}>131 calories</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/cof-hojicha.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Hojicha Latte</div>
                  <div className={styles.item__price}>$9</div>
                  <div className={styles.item__calories}>140 calories</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/cof-rose.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Rose Latte</div>
                  <div className={styles.item__price}>$9</div>
                  <div className={styles.item__calories}>156 calories</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/cof-redvelvet.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Red Velvet Latte</div>
                  <div className={styles.item__price}>$9</div>
                  <div className={styles.item__calories}>450 calories</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/cof-matcha.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Matcha Latte</div>
                  <div className={styles.item__price}>$9</div>
                  <div className={styles.item__calories}>225 calories</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__image}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/cof-ubi.png" /></div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Sweet Potato Latte</div>
                  <div className={styles.item__price}>$9</div>
                  <div className={styles.item__calories}>445 calories</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item__image}>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/cof-charcoal.png" />
                </div>
                <div className={styles.item__desc}>
                  <div className={styles.item__name}>Charcoal Latte</div>
                  <div className={styles.item__price}>$9</div>
                  <div className={styles.item__calories}>450 calories</div>
                </div>
              </div>
            </div>
            <a className={styles.menudownload}>Download the menu</a>
          </div>
        </main>
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
      </div>
      
    </>
  )
}
