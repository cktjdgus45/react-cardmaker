import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService, FileInput }) => {
    const [cards, setCards] = useState({
        '1': {
            id: '1',
            name: 'paul',
            company: 'Naver',
            theme: 'light',
            title: 'software Engineer',
            email: 'cktjdgus45@naver.com',
            message: 'try again',
            fileName: 'fileName1',
            fileUrl: ''
        },
        '2': {
            id: '2',
            name: 'alsa',
            company: 'kakao',
            theme: 'dark',
            title: 'software Engineer',
            email: 'cktjdgus12@naver.com',
            message: 'try again never give up',
            fileName: 'fileName2',
            fileUrl: ''
        },
        '3': {
            id: '3',
            name: 'dwein',
            company: 'Samsung',
            theme: 'colorful',
            title: 'software Engineer',
            email: 'cktjdgus97@naver.com',
            message: 'try do again',
            fileName: 'fileName3',
            fileUrl: ''
        },
    })
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    }

    const createOrUpdateCard = (card) => {
        setCards(cards => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        })
    }
    const deleteCard = (card) => {
        setCards(cards => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        })
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
                <Editor FileInput={FileInput}
                    cards={cards}
                    addCard={createOrUpdateCard}
                    updatedCard={createOrUpdateCard}
                    deleteCard={deleteCard}></Editor>
                <Preview cards={cards}></Preview>
            </div>
            <Footer></Footer>
        </section>
    )
};


export default Maker;