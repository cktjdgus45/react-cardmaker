import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input.jsx/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card }) => {
    const { name, company, theme, title, email, message, fileName, fileUrl } = card;
    const onsubmit = () => { };
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" value={name} />
            <input className={styles.input} type="text" name="company" value={company} />
            <select className={styles.select} name="theme" value={theme}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input className={styles.input} type="text" name="title" value={title} />
            <input className={styles.input} type="text" name="email" value={email} />
            <textarea name="message" className={styles.textarea} value={message}></textarea>
            <div className={styles.fileInput}>
                <ImageFileInput></ImageFileInput>
            </div>
            <Button className={styles.button} name='delete' onClick={onsubmit}></Button>
        </form>
    )
}

export default CardEditForm;