import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Cards from './component/Cards/Cards'
import NewCreatures from './component/Creatures/NewCreatures';
import CreatureRessources from './component/Creatures/CreatureRessources';
import AddCardForm from './component/AddCardForm/AddCardForm';
import Creatures from './component/Creatures/Creatures';
import Home from './component/Home/Home';

const App = () => {

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

// TODO

// delete

// Input recherche par couleur

// Quand on clique sur une carte l'afficher en gros
