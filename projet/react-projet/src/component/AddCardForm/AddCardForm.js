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
  const [formNotCompleted, myFormIsNotCompleted] = useState(false);

  const nameChangeHandler = (event) => {
    console.log(event.target.value)
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

  const submitMyNewCardHandler = async (event) => {
    console.log('submitMyNewCardHandler()');
    event.preventDefault();

    if (enteredName === '' || enteredCost === ''  || enteredColor === '' || enteredAttack === '' || enteredDefense === '' || enteredDescription === '') {
      console.log('The form is not filled out correctly')
      myFormIsNotCompleted(true);
    } else {
      const creatures = {
        name: enteredName,
        cost: enteredCost,
        color: enteredColor,
        attack: enteredAttack,
        defense: enteredDefense,
        description: enteredDescription,
      };

      await addCreature(creatures);

      setEnteredName('');
      setEnteredCost('');
      setEnteredColor('');
      setEnteredAttack('');
      setEnteredDefense('');
      setEnteredDescription('');
    }
  };

  const addCreature = async (newCreature) => {
    console.log('addCreatures', newCreature);
    await addCard(newCreature);
  }

  return (
    <form>
      <div>
        <p>Please complete all fields of the form to add your card</p>
      </div>
      <div>
        <div>
          <label>Name</label>
          <input
            type='text'
            value={enteredName}
            onChange={nameChangeHandler}
            required
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
            required
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type='text'
            value={enteredDescription}
            onChange={descriptionChangeHandler}
            required
          />
        </div>
        <div>
          <label>Color</label>
          <select value={enteredColor} onChange={colorChangeHandler} required>
                <option value=''>Select Color</option>
                <option value='Red'>Red</option>
                <option value='White'>White</option>
                <option value='Black'>Black</option>
                <option value='Blue'>Blue</option>
                <option value='Green'>Green</option>
            </select>
        </div>
        <div>
          <label>Attack</label>
          <input
            type='number'
            value={enteredAttack}
            onChange={attackChangeHandler}
            required
          />
        </div>
        <div>
          <label>Defense</label>
          <input
            type='number'
            value={enteredDefense}
            onChange={defenseChangeHandler}
            required
          />
        </div>
      </div>
      {formNotCompleted &&
        <div>
          <p>The form is not filled out correctly</p>
        </div>
      }
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
