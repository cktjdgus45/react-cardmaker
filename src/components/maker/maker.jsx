import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'paul',
            company: 'Naver',
            theme: 'light',
            title: 'software Engineer',
            email: 'cktjdgus45@naver.com',
            message: 'try again',
            fileName: 'paul',
            fileUrl: ''
        },
        {
            id: '2',
            name: 'alsa',
            company: 'kakao',
            theme: 'dark',
            title: 'software Engineer',
            email: 'cktjdgus12@naver.com',
            message: 'try again never give up',
            fileName: 'paulasd',
            fileUrl: ''
        },
        {
            id: '3',
            name: 'dwein',
            company: 'Samsung',
            theme: 'colorful',
            title: 'software Engineer',
            email: 'cktjdgus97@naver.com',
            message: 'try do again',
            fileName: 'paulqwe',
            fileUrl: ''
        },
    ])
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    }
    const addCard = (card) => {
        const updated = [...cards, card];
        setCards(updated);
    }

    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                history.push('/');
            }
        });
    })


    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}></Header>
            <div className={styles.container}>
                <Editor cards={cards} addCard={addCard}></Editor>
                <Preview cards={cards}></Preview>
            </div>
            <Footer></Footer>
        </section>
    )
};


export default Maker;