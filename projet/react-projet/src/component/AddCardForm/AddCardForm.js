// Permet d'ajouter une carte

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addCard } from '../../services/card';

import './AddCardForm.css';

const AddCardForm = (card) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredColor, setEnteredColor] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredCost, setEnteredCost] = useState('');
  const [enteredAttack, setEnteredAttack] = useState('');
  const [enteredDefense, setEnteredDefense] = useState('');
  const [newCreatures, setNewCreatures] = useState({});


  const nameChangeHandler = (event) => {
    console.log('nameChangeHandler',event);
    console.log(event.target.value);
    setEnteredName(event.target.value);
  };

  const costChangeHandler = (event) => {
    setEnteredCost(event.target.value);
  };

  const colorChangeHandler = (event) => {
    setEnteredColor(event.target.value);
  };
  
  const attackChangeHandler = (event) => {
    setEnteredAttack(event.target.value);
  };
  
  const defenseChangeHandler = (event) => {
    setEnteredDefense(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const submitMyNewCardHandler = (event) => {
    console.log('submitMyNewCardHandler()');
    event.preventDefault();

    const creatures = {
      Name: enteredName,
      Cost: enteredCost,
      Color: enteredColor,
      Attack: enteredAttack,
      Defense: enteredDefense,
      Description: enteredDescription,
    };

    console.log('setNewCreatures()');

    setNewCreatures(creatures);
    setEnteredName('');
    setEnteredCost('');
    setEnteredColor('');
    setEnteredAttack('');
    setEnteredDefense('');
    setEnteredDescription('');

    addCreature();
  };

  const addCreature = async () => {
    console.log('addCreatures', newCreatures);
    await addCard(newCreatures).then();
  }

  return (
    <form>
      <div>
        <div>
          <label>Name</label>
          <input
            type='text'
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </div>
        <div>
          <label>Cost</label>
          <input
            type='number'
            min='0'
            step='1'
            value={enteredCost}
            onChange={costChangeHandler}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type='text'
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div>
          <label>Color</label>
          <input
            type='text'
            value={enteredColor}
            onChange={colorChangeHandler}
          />
        </div>
        <div>
          <label>Attack</label>
          <input
            type='number'
            value={enteredAttack}
            onChange={attackChangeHandler}
          />
        </div>
        <div>
          <label>Defense</label>
          <input
            type='number'
            value={enteredDefense}
            onChange={defenseChangeHandler}
          />
        </div>
      </div>
      <div>
        <Link to="/">
            <button type='submit' onClick={submitMyNewCardHandler}>Add Creatures</button>
            <button type="button" onClick={card.onCancel}>Cancel</button>
        </Link>
      </div>
    </form>
  );
};

export default AddCardForm;
