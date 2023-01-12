import React from 'react';

import CreatureRessources from './CreatureRessources';
import './CreaturesList.css';

const CreaturesList = (creatures) => {
  if (creatures.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>

    </ul>
  );
};

export default CreaturesList;