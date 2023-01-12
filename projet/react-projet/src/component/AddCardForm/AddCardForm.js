// Permet d'ajouter une carte

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './AddCardForm.css';

const AddCardForm = (card) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredColor, setEnteredColor] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredCost, setEnteredCost] = useState('');
  const [enteredAttack, setEnteredAttack] = useState('');
  const [enteredDefense, setEnteredDefense] = useState('');


  const nameChangeHandler = (event) => {
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
    event.preventDefault();

    const creatures = {
      Name: enteredName,
      Cost: enteredCost,
      Color: enteredColor,
      Attack: enteredAttack,
      Defense: enteredDefense,
      Description: enteredDescription,
    };

    card.onSaveExpenseData(creatures);
    nameChangeHandler('');
    setEnteredName('');
    setEnteredCost('');
    setEnteredColor('');
    setEnteredAttack('');
    setEnteredDefense('');
    setEnteredDescription('');
  };

  return (
    <form onSubmit={submitMyNewCardHandler}>
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
            <button type='submit'>Add Creatures</button>
            <button type="button" onClick={card.onCancel}>Cancel</button>
        </Link>
      </div>
    </form>
  );
};

export default AddCardForm;
