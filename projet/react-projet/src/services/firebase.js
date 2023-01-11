import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"

let db = false;

export const getDb = () => {
    if(!db){
        const firebaseConfig = {
            apiKey: "AIzaSyDOpfVHnc_1lNsxfy_MsQ5X0pHrN9L7y9c",
            authDomain: "react-project-2bd5a.firebaseapp.com",
            databaseURL: "https://react-project-2bd5a-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "react-project-2bd5a",
            storageBucket: "react-project-2bd5a.appspot.com",
            messagingSenderId: "10452032782",
            appId: "1:10452032782:web:cda078a2020e26a2984b5f"
          };

        const app = initializeApp(firebaseConfig);

        db = getFirestore(app);
    }

    return db;
}