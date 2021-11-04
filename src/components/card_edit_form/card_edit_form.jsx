import React from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ FileInput, card, updatedCard, deleteCard }) => {
    const { name, company, theme, title, email, message, fileName } = card;
    const onSubmit = () => {
        deleteCard(card);
    };

    const onFileChange = file => {
        updatedCard({
            ...card,
            fileName: file.name,
            fileUrl: file.url
        })
    }

    const onChange = (event) => {
        if (event.target == null) {
            return;
        }
        event.preventDefault();
        updatedCard({
            ...card,
            [event.target.name]: event.target.value
        })
    }
    return (
        <form className={styles.form}>
            <input className={styles.input}
                type="text"
                name="name"
                value={name}
                onChange={onChange} />

            <input className={styles.input}
                type="text"
                name="company"
                value={company}
                onChange={onChange} />
            <select className={styles.select} name="theme" value={theme} onChange={onChange}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input className={styles.input}
                type="text"
                name="title"
                value={title} onChange={onChange} />
            <input className={styles.input}
                type="text"
                name="email"
                value={email}
                onChange={onChange} />
            <textarea name="message" className={styles.textarea} value={message} onChange={onChange}></textarea>
            <div className={styles.fileInput}>
                <FileInput name={fileName} onFileChange={onFileChange}></FileInput>
            </div>
            <Button className={styles.button} name='delete' onClick={onSubmit}></Button>
        </form>
    )
}

export default CardEditForm;