import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import styles from './styles.module.scss';
import { IconGrid } from './IconGrid';

export const InfoCard = () => {
    return (
       <Card className={styles.infoCard}>
        <CardContent>
            <h2 className={styles.infoHeading}>What is the Garryowen Community Development Project?</h2>
            <p>Your community's support hub!</p>
            <h3>Garryowen Community Development Projects mission is to empower local people, to be actively 
                involved in meeting the needs of their Community.
            </h3>
            <IconGrid/>
        </CardContent>
       </Card>
    )
}