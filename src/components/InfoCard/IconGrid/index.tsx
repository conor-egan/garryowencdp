import { Button, Grid } from "@mui/material";
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import styles from './styles.module.scss';

export const IconGrid = () => {
    return (
        <Grid container spacing={2} className={styles.iconGrid}>
            <Grid item xs={6}>
                <HomeWorkOutlinedIcon className={styles.icon}/>
                <p>
                    We are working together to develop sustainable services and facilities for all members
                    of the Community with the aim of making Garryowen a better place to live.
                </p>
            </Grid>
            <Grid item xs={6}>
                <VolunteerActivismOutlinedIcon className={styles.icon}/>
                <p>
                    We are campaigning to fund a new community centre - a central hub for even more inclusive services
                    and opportunities.
                </p>
            </Grid>
            <Grid item xs={6}>
                <SchoolOutlinedIcon className={styles.icon}/>
                <p>We offer a range of different classes to empower and strengthen our community members.</p>
            </Grid>
            <Grid item xs={6}>
                <InfoOutlinedIcon className={styles.icon}/>
                <p>
                    Whether you are new to the community or Garryowen born and bred, a welcome awaits you. 
                    Information about our centre and the current programmes can be found here:
                </p>
                <Button variant='contained'>Info</Button>
            </Grid>
        </Grid>
    );
}