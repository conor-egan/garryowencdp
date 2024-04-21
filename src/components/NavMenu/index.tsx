import { Button } from '@mui/material';
import styles from './styles.module.scss';
import '../../styles/colors.scss';
import { CustomNavLink } from './CustomNavLink';

export const NavMenu = () => {
    return (
        <div className={styles.navMenu}>
            <Button component={CustomNavLink} to='/'>Home</Button>
            <Button component={CustomNavLink} to='/about'>About Us</Button>
            <Button component={CustomNavLink} to='/contact'>Contact Us</Button>
        </div>
    )
};
