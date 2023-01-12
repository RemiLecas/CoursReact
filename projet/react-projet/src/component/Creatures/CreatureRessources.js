import React, {useState, useEffect} from 'react'
import Cards from '../Cards/Cards';
import {findAll} from '../../services/card'
import './CreatureRessources.css';

const CreatureRessources = (res) => {

    const [loading, setLoading] = useState(false);
    const [card, myNewCreature] = useState([]);

    const creature ={};
  
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
    <li>
        <div> 
            {card.map((creature) => (
                <div>
                    <div>
                        <h2>{creature.Name}</h2>
                    </div>
                    <div>
                        <h2>{creature.Cost}</h2>
                    </div>
                    <div>
                        <h2>{creature.Description}</h2>
                    </div>
                    <div>
                        <h2>{creature.Attack}</h2>
                        <h2>{creature.Defense}</h2>
                    </div>
                    <div>
                        <h2>{creature.Color}</h2>
                    </div>
                </div>                
            ))}
        </div>
    </li>
  );
};

export default CreatureRessources;