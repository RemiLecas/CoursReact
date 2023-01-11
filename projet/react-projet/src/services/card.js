import {getDocs, collection} from 'firebase/firestore'
import {getDb} from './firebase'

const collection_name = 'MagicCollection'

export const findAll = async () => {
    const doc_refs = await getDocs(collection(getDb(), collection_name));

    const res = [];

    doc_refs.forEach(creature => {
        res.push({
            id: creature.id,
            ...creature.data()
        })
    })

    return res
}

// Rajouter des create, update, delete, get


// juste à changer "getDocs"