import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Cards from './component/Cards/Cards'
import NewCreatures from './component/Creatures/NewCreatures';
import { findAll } from './services/card';

const App = () => {
  const [IsCreating, setIsCreating] = useState(false);
  const [creature, setCreature] = useState(findAll);


  const addCreatureHandler = (creature) => {
    setCreature((lastCreature) => {
      return [creature, ...lastCreature];
    });
  };

  const startCreatingCards = () => {
    setIsCreating(true);
  };

  const stopCreatingCards = () => {
    setIsCreating(false);
  };

  return (
    <div>
      <header>
        <h2>My cards:</h2>
      </header>

      {/* Affichage conditionnel */}
      {!IsCreating && (
        <button onClick={startCreatingCards}>Add New Creature</button>
      )}
      {IsCreating && (
        <NewCreatures
        saveNewCreatureData={addCreatureHandler}
        onCancel={stopCreatingCards}
        />
      )}
      <Cards/>

    </div>
  );
}

export default App;

//Form d'ajout quand on clique

//Form d'update quand on clique

//Form delete

//Input recherche par couleur