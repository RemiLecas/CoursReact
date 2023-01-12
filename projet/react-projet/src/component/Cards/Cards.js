import React from 'react';
import CreatureRessources from '../Creatures/CreatureRessources';
import CreaturesList from '../Creatures/CreaturesList';
import { Link } from "react-router-dom";

import './Cards.css';

// Faire apparaitre toute les cartes avec les infos
const Card = () => {
  const classes = 'cards ';

  return(
    <div className={classes}>
       <CreatureRessources/>
    </div>
    
  )
};

export default Card;


// Mettre bouton update + deleate

//Bouton update récupère automatiquement l'id et nous permet de modifier la carte sélectionner

//Bouton deleate récupère automatiquement l'id et nous permet de supprimer la carte sélectionner