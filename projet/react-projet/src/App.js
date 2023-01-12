import React, {useState, useEffect} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Cards from './component/Cards/Cards'
import NewCreatures from './component/Creatures/NewCreatures';
import { findAll } from './services/card';
import CreatureRessources from './component/Creatures/CreatureRessources';
import AddCardForm from './component/AddCardForm/AddCardForm';
import Creatures from './component/Creatures/Creatures';
import Home from './component/Home/Home';

const App = () => {
  const [creature, setCreature] = useState(findAll);


  const addCreatureHandler = (creature) => {
    setCreature((lastCreature) => {
      return [creature, ...lastCreature];
    });
  };



  return (
  
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path ="cards" element={<Cards/>}/>
            <Route path="creaturesRessources" element={<CreatureRessources/>}></Route>
            <Route path="creatures" element={<Creatures/>}></Route>
            <Route path="addCardForm" element={<AddCardForm/>}></Route>
            <Route path="newCreatures" element={<NewCreatures/>}></Route>
          </Routes>

        </div>
  );
}

export default App;

//Form d'ajout quand on clique

//Form d'update quand on clique

//Form delete

//Input recherche par couleur