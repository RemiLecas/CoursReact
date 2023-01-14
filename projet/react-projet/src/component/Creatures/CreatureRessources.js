import React, {useState, useEffect} from 'react'
import Cards from '../Cards/Cards';
import {findAll, getById} from '../../services/card'
import './CreatureRessources.css';
import { Link } from 'react-router-dom';
import { Modal } from '@material-ui/core';
import { modifyCreatureCard } from '../../services/card';

export const CreatureRessources = (res) => {
    const [editedCreature, setEdit] = useState(false);
    const [enteredName, setEnteredName] = useState('');
    const [enteredColor, setEnteredColor] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredCost, setEnteredCost] = useState('');
    const [enteredAttack, setEnteredAttack] = useState('');
    const [enteredDefense, setEnteredDefense] = useState('');
    const [myModifyCreature, setCreatures] = useState(res);

    // Ouvre la modal
    const handleOpenModal = () => {
        setEdit(true);
        console.log(res.id)
    };

    // Ferme la modal
    const handleCloseModal = () => {
        setEdit(false);
    };

    const setEditCreature = () =>{
        console.log()
    }

    const modifyNameChangeHandler = (event) => {
        setEnteredName(event.target.value);
      };
    
      const modifyCostChangeHandler = (event) => {
        setEnteredCost(event.target.value);
      };
    
      const modifyColorChangeHandler = (event) => {
        setEnteredColor(event.target.value);
      };
      
      const modifyAttackChangeHandler = (event) => {
        setEnteredAttack(event.target.value);
      };
      
      const modifyDefenseChangeHandler = (event) => {
        setEnteredDefense(event.target.value);
      };
    
      const modifyDescriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
      };
    
    const submitMyModifyCardHandler = async (event) => {
        console.log('submitMyModifyCardHandler()');
        event.preventDefault();
    
        const creatures = {
            id: res.id,
          name: enteredName,
          cost: enteredCost,
          color: enteredColor,
          attack: enteredAttack,
          defense: enteredDefense,
          description: enteredDescription,
        };
    
        await modifyCreature(creatures);

        setEdit(false);
    };
    
    const modifyCreature = async (modifyCreature) => {
        console.log('modifyCreature', modifyCreature);
        await modifyCreatureCard(modifyCreature);
    }      



  return (
      <div> 
            <li>            
                <Cards>
                    <div>
                        <div>
                            <h2>Name: {res.Name}</h2>
                        </div>
                        <div>
                            <h2>Cost: {res.Cost}</h2>
                        </div>
                        <div>
                            <h2>Description: {res.Description}</h2>
                        </div>
                        <div>
                            <h2>Attack: {res.Attack} / Defense: {res.Defense}</h2>
                        </div>
                        <div>
                            <h2>{res.Color}</h2>
                        </div>
                        <button onClick={handleOpenModal}> Edit </button>
                    </div>
                </Cards>                
            </li>  
        <Modal open={editedCreature}>
            <form>
            <label>
                Name :
                {' '}
                <input type="text" placeholder={res.Name} onChange={modifyNameChangeHandler}  />
            </label>
            {' '}
            <label>
                Description :
                {' '}
                <input type="text" placeholder={res.Description} onChange={modifyDescriptionChangeHandler} />
            </label>
            {' '}
            <label>
                Cost :
                {' '}
                <input type="text"  onChange={modifyCostChangeHandler} />
            </label>
            {' '}
            <label>
                Attack :
                {' '}
                <input type="text" onChange={modifyAttackChangeHandler} />
            </label>
            {' '}
            <label>
                Defense :
                {' '}
                <input type="text" onChange={modifyDefenseChangeHandler} />
            </label>
            {' '}
            <label>
                Color :
                {' '}
                <input type="text" onChange={modifyColorChangeHandler} />
            </label>
            {' '}
            <button type="submit" onClick={submitMyModifyCardHandler}>Edit</button>
            <button type="submit" onClick={handleCloseModal}>Close</button>
            </form>
        </Modal>
    </div>
    
  );
};

export default CreatureRessources;