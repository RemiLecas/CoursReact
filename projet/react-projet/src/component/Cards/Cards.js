import React from 'react';
import CreatureRessources from '../Creatures/CreatureRessources';
import { Link } from "react-router-dom";

import './Cards.css';
import Creatures from '../Creatures/Creatures';

// Faire apparaitre toute les cartes avec les infos
const Cards = (creature) => {
  const classes = 'cards ';

  return (
    <div className={classes}>
      {creature.children}
    </div>

  )
};

export default Cards;


// Mettre bouton update + deleate

//Bouton update récupère automatiquement l'id et nous permet de modifier la carte sélectionner

//Bouton deleate récupère automatiquement l'id et nous permet de supprimer la carte sélectionner