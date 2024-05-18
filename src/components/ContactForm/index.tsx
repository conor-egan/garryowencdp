import { Button, Card, CardActions, CardContent, CardHeader, TextField } from "@mui/material";
import { TextareaAutosize as Textarea } from '@mui/base/TextareaAutosize';
import React from "react";
import styles from './styles.module.scss';

export const ContactForm = () => {
    return(
        <Card className={styles.contactForm}>
            <CardContent>
                <h2>Send us a message!</h2>
                <TextField
                    required
                    id="outlined-required"
                    label="Full name"
                    className={styles.contactInput}
                    fullWidth
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Email address"
                    className={styles.contactInput}
                    fullWidth
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Subject"
                    className={styles.contactInput}
                    fullWidth
                />
                <h4>Tell us more</h4>
                <TextField
                    required
                    id="outlined-required"
                    label="Your message"
                    multiline
                    rows={3}
                    maxRows={6}
                    className={styles.contactInput}
                    fullWidth
                />
                <Button variant='contained'>Send Message</Button>
            </CardContent>
        </Card>
    )
}