import {getDocs, collection, addDoc, doc, updateDoc} from 'firebase/firestore'
import {getDb} from './firebase'

const collection_name = 'MagicCollection'


// Get ALL
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

// POST
export const addCard = async (creatures) => {
    await addDoc(collection(getDb(), collection_name), {
        Name: creatures?.name,
        Cost: creatures?.cost,
        Description: creatures?.description,
        Color: creatures?.color,
        Attack: creatures?.attack,
        Defense: creatures?.defense
    });   
    
}


// PUT

export const modifyCreatureCard = async (creatures) => {
    const card_ref = doc(collection(getDb(), collection_name),creatures.id);

    console.log(creatures.id);

    await updateDoc(card_ref, {
        Name: creatures?.name,
        Cost: creatures?.cost,
        Description: creatures?.description,
        Color: creatures?.color,
        Attack: creatures?.attack,
        Defense: creatures?.defense
    });

    return creatures
}

// Rajouter des create, update, delete, getID