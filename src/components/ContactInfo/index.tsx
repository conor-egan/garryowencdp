import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from './styles.module.scss';

export const ContactInfo = () => {
    return(
        <div>
            <h1 className={styles.infoHeader}>Let's get in touch! Find out how you can reach us.</h1>
            <h2>Contact Us</h2>
            <span className={styles.bulletRow}>
                <LocalPhoneIcon fontSize='large' />
                <h3 className={styles.bulletText}>061 310690</h3>
            </span>
            <span className={styles.bulletRow}>
                <EmailIcon fontSize='large' />
                <h3 className={styles.bulletText}>info@garryowencdp.com</h3>
            </span>
            <span className={styles.bulletRow}>
                <AccessTimeIcon fontSize='large' />
                <h3 className={styles.bulletText}>9 am - 5 pm Mon - Fri</h3>
            </span>
            <h2>Location</h2>
            <span className={styles.bulletRow}>
                <LocationOnIcon fontSize='large' />
                <h3 className={styles.bulletText}>23 John's Street, Limerick</h3>
            </span>
        </div>
    )
}