import {getDocs, collection, addDoc, setDoc} from 'firebase/firestore'
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
        Name: creatures?.Name,
        Color: creatures?.Color,
        Cost: creatures?.Cost,
        Description: creatures?.Description,
        Attack: creatures?.Attack,
        Defense: creatures?.Defense
      });

    
    
}

// PUT

// export const modifyCard = async () => {
//     const doc_refs = await (collection(getDb(), collection_name));

//     const res = [];

//     doc_refs.forEach(creature => {
//         res.push({
//             id: creature.id,
//             ...creature.data()
//         })
//     })

//     return res
// }

// Rajouter des create, update, delete, get


// juste à changer "getDocs"