import { Button, Grid } from "@mui/material";
import styles from './styles.module.scss';
import garryowen from '../../images/garryowen.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import EditNoteIcon from '@mui/icons-material/EditNote';
import contract from '../../images/contract.png';
import charity from '../../images/charity.png'

export const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div>
                        <h4>Have a minute?</h4>
                        <span className={styles.bulletRow}>
                            <FacebookIcon/>
                            <a href='#' className={styles.bulletText}>Facebook</a>
                        </span>
                        <span className={styles.bulletRow}>
                            <InstagramIcon/>
                            <a href='#' className={styles.bulletText}>Instagram</a>
                        </span>
                        <span className={styles.bulletRow}>
                            <LinkedInIcon/>
                            <a href='#' className={styles.bulletText}>LinkedIn</a>
                        </span>
                        <span className={styles.bulletRow}>
                            <XIcon/>
                            <a href='#' className={styles.bulletText}>X</a>
                        </span>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div>
                        <h4>Have 5 minutes?</h4>
                        <img src={contract} alt='letter-icon' className={styles.largeIcon}/>
                        <a href='#' className={styles.footerLink}>Write to your local TD</a>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div>
                        <h4>Have a little longer?</h4>
                        <img src={charity} alt='volunteer-icon' className={styles.largeIcon}/>
                        <a href='#' className={styles.footerLink}>Volunteer your time</a>
                    </div>
                </Grid>
            </Grid>
            <a href="https://www.flaticon.com/free-icons/document" style={{fontSize: '8px'}} title="document icons">Document icons created by Freepik - Flaticon</a>
        </div>
    )
}