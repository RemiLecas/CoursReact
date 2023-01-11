import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import { findAll } from './services/card';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [card, myCreature] = useState([]);

  const fetchData = async () => {
    setLoading(true)

    const res = await findAll();

    myCreature([...res])
    setLoading(false)
    console.log('response', res)
  }

  useEffect(()=> {
    fetchData()
  },[])

  return (
    <div>
      <header>
        <h2>My cards:</h2>
      </header>

      <button onClick={() => {console.log('clicked')}}>Request</button>
      {/* Affichage conditionnel */}
      

    </div>
  );
}

export default App;

//Form d'ajout quand on clique

//Form d'update quand on clique

//Form delete

//Input recherche par couleur