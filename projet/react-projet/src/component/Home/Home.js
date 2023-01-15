import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Home.css';
import Creatures from '../Creatures/Creatures';

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
                <Link to="newCreatures"><button onClick={startCreatingCards}>Ajouter une créature</button></Link>
            )}
            <Creatures />
        </div>
    );
};

export default Home;
