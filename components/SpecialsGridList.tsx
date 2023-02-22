import React from 'react'
import MenuItem from './MenuItem'
import { NextPage } from 'next';
import { Food } from '@/types';
import styles from '@/styles/Menu.module.css'

interface IProps {
    data: Food[];
}

const SpecialsGridList: NextPage<IProps> = ({data}) => {
  return (
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
  )
}

export default SpecialsGridList