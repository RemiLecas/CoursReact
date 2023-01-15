import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddCardForm from '../AddCardForm/AddCardForm';
import './NewCreatures.css';

const NewCreatures = (card) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveCreatureDataHandler = (enteredCreatureData) => {
    const newCreatureData = {
      ...enteredCreatureData,
      id: Math.random().toString(),
    };
    card.onAddCreature(newCreatureData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <AddCardForm
        onSaveCreatureData={saveCreatureDataHandler}
        onCancel={stopEditingHandler}
      />
    </div>
  );
};

export default NewCreatures;
