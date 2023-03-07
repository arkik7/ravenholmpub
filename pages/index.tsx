import styles from '@/styles/Landing.module.css'
import TodaysMenu from '@/components/TodaysMenu'
import axios from 'axios';
import { BASE_URL } from '@/utils';
import { DailyMenu } from '@/types';

interface IProps {
  days: DailyMenu[];
}

export default function Home({ days }: IProps) {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const today = weekday[new Date().getDay()]
  console.log(today)
  console.log("daysmenu", days)

  const todaysMenuFilter = days.filter(function (day) {
    return day.day === today;
  });
  const todaysMenu = todaysMenuFilter[0]
  console.log("todaysmenu", todaysMenu)



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
        <TodaysMenu data={todaysMenu}/>
      </div>
    </div>
  )
}


export const getServerSideProps = async () => {

  let dayRes = await axios.get(`${BASE_URL}/api/dailyMenu`);

  return {
    props: { 
      days: dayRes.data,
    },
  };
};
