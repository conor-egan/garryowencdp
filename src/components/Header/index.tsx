import styles from './styles.module.scss';
import garryowen from '../../images/garryowen.png';
import { NavMenu } from '../NavMenu';
export const Header: React.FC = () => {
    return(
       <div className={styles.header}>
        <div className={styles.branding}>
            <img className={styles.headerIcon} src={garryowen} alt={'garryowen-logo'}/>
            <h1>Garryowen Community Development Project</h1>
        </div>
        <NavMenu />
       </div>
    );
}