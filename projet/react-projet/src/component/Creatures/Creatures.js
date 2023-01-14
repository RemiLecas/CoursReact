import React, { useEffect, useState } from 'react';

import './Creatures.css';
import CreatureRessources from './CreatureRessources';
import { findAll } from '../../services/card';

const Creatures = (res) => {

  const [loading, setLoading] = useState(false);
  const [card, myNewCreature] = useState([]);

  const fetchData = async () => {
    setLoading(true)

    const res = await findAll();

    myNewCreature([...res])
    setLoading(false)
    console.log('response', res);
  }

  useEffect(() => {
      fetchData()
    },[])


  return (
    <div>
        {card.map((creature) => (
          <ul>
              <CreatureRessources 
                key ={creature.key}
                id ={creature.id}
                Name = {creature.Name}
                Description = {creature.Description}
                Attack = {creature.Attack}
                Defense = {creature.Defense}
                Color = {creature.Color}
                Cost = {creature.Cost}

                />
          </ul>
        ))}
    </div>
  );
};

export default Creatures;
