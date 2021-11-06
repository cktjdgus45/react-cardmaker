import firebaseApp from './firebase';
import { getDatabase, ref, set, remove } from "firebase/database";

const fireBaseApp = firebaseApp;
class CardRepository {
    saveCard(userId, card) {
        const db = getDatabase();
        set(ref(db, `${userId}/cards/${card.id}`), {
            name: card.name,
        });
    }
    removeCard(userId, card) {
        const db = getDatabase();
        remove(ref(db, `${userId}/cards/${card.id}`), {
            name: card.name,
            company: card.company
        });
    }
}




export default CardRepository;