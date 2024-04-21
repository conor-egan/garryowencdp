import { BulletCard } from "../../components/BulletCard";
import { Footer } from "../../components/Footer";
import { InfoCard } from "../../components/InfoCard";
import { MainCard } from "../../components/MainCard";
import styles from './styles.module.scss';


export const HomePage = () => {
  return (
    <div>
      <div className={styles.bannerWrapper}>
        <div className={styles.bannerContent}>
          <div className={styles.overlay}/>
          <MainCard/>
        </div>
      </div>
      <div className={styles.mainInfo}>
        <InfoCard/>
      </div>
      <div className={styles.mainInfo}>
        <BulletCard/>
      </div>
      <Footer/>
    </div>
  )
}