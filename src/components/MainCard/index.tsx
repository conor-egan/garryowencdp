import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import styles from './styles.module.scss';

export const MainCard = () => {
    return (
       <Card className={styles.mainCard}>
        <CardContent>
            <h2 className={styles.bannerText}>We're campaigning for a brighter future!</h2>
            <h3 className={styles.cta}>Take part in your community today.</h3>
        </CardContent>
        <CardActions className={styles.ctaActions}>
            <Button variant='contained' className={styles.ctaButton}>Get Involved</Button>
        </CardActions>
       </Card>
    )
}