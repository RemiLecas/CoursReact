import React, {useState} from 'react';

import { Link } from 'react-router-dom';
import './Home.css';
import Cards from '../Cards/Cards';

const Home = () => {
    const [IsCreating, setIsCreating] = useState(false);

    const startCreatingCards = () => {
        setIsCreating(true);
    };

  return (
    <div>
        <header>
            <h2>My cards:</h2>
        </header>
    
        {/* Affichage conditionnel */}
        {!IsCreating && (
            <Link to="newCreatures"><button onClick={startCreatingCards}>Add New Creature</button></Link>
        )}
        <Cards/>
    </div>
  );
};

export default Home;
