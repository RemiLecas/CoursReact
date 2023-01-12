import React, { useState } from 'react';

import Card from '../Cards/Cards';
import CreaturesList from './CreaturesList';
import './Creatures.css';
import CreatureRessources from './CreatureRessources';

const Creatures = (res) => {
  return (
    <div>
      <Card>
        <CreatureRessources />
      </Card>
    </div>
  );
};

export default Creatures;
