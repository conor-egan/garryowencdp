import { Card, CardContent } from "@mui/material";
import React from "react";
import styles from './styles.module.scss';
import { ColoredListItems } from "../../types";
import CircleIcon from '@mui/icons-material/Circle';


export const BulletCard = () => {
    return (
        <Card className={styles.infoCard}>
            <CardContent className={styles.bulletContent}>
                <h2 className={styles.bulletHeading}>What we do: </h2>
                <span className={styles.bulletRow}><CircleIcon style={{color: 'orange'}} /><p className={styles.bulletText}>Advocate for Community development by campaigning for services and facilities.</p></span>
                <span className={styles.bulletRow}><CircleIcon style={{color: 'yellow'}} /><p className={styles.bulletText}>Organise and facilitate exercises and adult education classes.</p></span>
                <span className={styles.bulletRow}><CircleIcon style={{color: 'deepskyblue'}} /><p className={styles.bulletText}>Bring the community together through events.</p></span>
                <span className={styles.bulletRow}><CircleIcon style={{color: 'fuchsia'}} /><p className={styles.bulletText}>Provide Community supports.</p></span>
            </CardContent>
        </Card>
    )
}