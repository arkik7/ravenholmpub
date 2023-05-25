import styles from '@/styles/Landing.module.css'
import TodaysMenu from '@/components/TodaysMenu'
import axios from 'axios';
import { BASE_URL } from '@/utils';
import { DailyMenu } from '@/types';
import { useRouter } from 'next/router';

interface IProps {
  days: DailyMenu[];
}

export default function Home({ days }: IProps) {
  const router = useRouter();
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const today = weekday[new Date().getDay()]
  const todaysMenuFilter = days.filter(function (day) {
    return day.day === today;
  });
  const todaysMenu = todaysMenuFilter[0]

  return (
    <div className={styles.header}>
      <header className='header__custom'>
        <div className='overlay'>
          <h1>Welcome to</h1>
          <h3>Ravenholm pub</h3>
          <p>This is a fictional pub, page created for demo purposes.</p>
          <br />
          <button onClick={() => {router.push('/menu')}}>Explore Menu</button>
        </div>
      </header>
      <div className={styles.main}>
        <div className={styles.menuheader}>
          <h2 className={styles.main__h2}>Daily Menu Today</h2>
        </div>
        <TodaysMenu data={todaysMenu}/>
      </div>
    </div>
  )
}


export const getStaticProps = async () => {

  let dayRes = await axios.get(`${BASE_URL}/api/dailyMenu`);

  return {
    props: { 
      days: dayRes.data,
    },
    revalidate: 60
  };
};
