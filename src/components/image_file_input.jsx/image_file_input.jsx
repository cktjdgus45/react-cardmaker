import React, { useRef } from 'react';
import styles from './image_input_file.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
    const inputRef = useRef();
    const onButtonClick = event => {
        event.preventDefault();
        inputRef.current.click();
    }

    const onChange = async (event) => {
        const uploaded = await imageUploader.upload(event.target.files[0]);
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        })
    }

    return (
        <div className={styles.container}>
            <input onChange={onChange} className={styles.input} ref={inputRef} type="file" accept="image/*" name="file"></input>
            <button className={styles.button} onClick={onButtonClick}>{name || 'No file'}</button>
        </div>
    )
}

export default ImageFileInput;