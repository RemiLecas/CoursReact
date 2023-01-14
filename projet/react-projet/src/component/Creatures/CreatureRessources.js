import React, {useState, useEffect} from 'react'
import Cards from '../Cards/Cards';
import {findAll} from '../../services/card'
import './CreatureRessources.css';

const CreatureRessources = (res) => {

  return (
    <div> 
        <li>
            <Cards>
                <div>
                    <div>
                        <h2>{res.Name}</h2>
                    </div>
                    <div>
                        <h2>{res.Cost}</h2>
                    </div>
                    <div>
                        <h2>{res.Description}</h2>
                    </div>
                    <div>
                        <h2>{res.Attack}</h2>
                        <h2>{res.Defense}</h2>
                    </div>
                    <div>
                        <h2>{res.Color}</h2>
                    </div>
                </div>
            </Cards>                
        </li>
    </div>
  );
};

export default CreatureRessources;