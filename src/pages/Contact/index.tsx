import { Grid } from "@mui/material"
import styles from './styles.module.scss';
import { ContactForm } from "../../components/ContactForm";
import { ContactInfo } from "../../components/ContactInfo";

export const ContactPage = () => {
    return (
        <div className={styles.gridWrapper}>
            <Grid container >
                <Grid item xs={6} className={styles.leftColumn}>
                    <ContactInfo/>
                </Grid>
                <Grid item xs={6}>
                    <ContactForm/>
                </Grid>
            </Grid>
        </div>
    )
}