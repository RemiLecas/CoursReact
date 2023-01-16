import React, { useState, useEffect } from 'react'
import Cards from '../Cards/Cards';
import { findAll, getById, removeCreature } from '../../services/card'
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
    const [formNotCompleted, myFormIsNotCompleted] = useState(false);

    // Ouvre la modale
    const handleOpenModal = () => {
        setEdit(true);
        console.log(res.id)
    };

    // Ferme la modale
    const handleCloseModal = () => {
        setEdit(false);
    };

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

        if (enteredName === '' || enteredCost === '' || enteredColor === '' || enteredAttack === '' || enteredDefense === '' || enteredDescription === '') {
            console.log('The form is not filled out correctly')
            myFormIsNotCompleted(true);
        } else {
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

        }

    };

    const modifyCreature = async (modifyCreature) => {
        console.log('modifyCreature', modifyCreature);
        await modifyCreatureCard(modifyCreature);
    }

    const deleteCreature = async () => {
        console.log('deleteCreature', res.id);
        await removeCreature(res);
        alert('Your creature has been deleted !')
    }

    const classes_card_color = 'card-color-' + res.Color;
    const classes_header_color = 'header-color-' + res.Color;
    const classes_midle_color = 'description-color-' + res.Color;
    const classes_bottom_color = 'bottom-color';
    const classes_image = 'image-color-' + res.Color;
    const classes_type = 'type-color-' + res.Color;


    return (
        <div>
            <Cards>
                <div className={classes_card_color}>
                    <div className={classes_header_color}>
                        <div className='name'>
                            Name : {res.Name}
                        </div>
                        <div className='cost'>
                            Cost : {res.Cost}
                        </div>
                    </div>

                    <div className={classes_image}>
                        In the future we will be able to put an image at this place
                    </div>

                    <div className={classes_type}>
                        Creatures
                    </div>

                    <div className={classes_midle_color}>
                        Description : {res.Description}
                    </div>
                    <div className={classes_bottom_color}>
                        <div className='attack_defense_box'>
                            {res.Attack} / {res.Defense}

                        </div>
                    </div>
                </div>
                <div className='div_button_edit_delete'>
                    <button onClick={handleOpenModal}> Edit </button>
                    <button onClick={deleteCreature}> Delete </button>
                </div>
            </Cards>

            <Modal open={editedCreature} className="modal">
                <form>
                    <div>
                        Please fill in all the fields of the card to be modified
                    </div>
                    <br></br>
                    <label>
                        Name :
                        <input type="text" placeholder={res.Name} onChange={modifyNameChangeHandler} />
                    </label>
                    <br></br>
                    <label>
                        Description :
                        <input type="text" placeholder={res.Description} onChange={modifyDescriptionChangeHandler} />
                    </label>
                    <br></br>
                    <label>
                        Cost :
                        <input type="number" placeholder={res.Cost} onChange={modifyCostChangeHandler} />
                    </label>
                    <br></br>
                    <label>
                        Attack :
                        <input type="number" placeholder={res.Attack} onChange={modifyAttackChangeHandler} />
                    </label>
                    <br></br>
                    <label>
                        Defense :
                        <input type="number" placeholder={res.Defense} onChange={modifyDefenseChangeHandler} />
                    </label>
                    <br></br>
                    <label>Color</label>
                    <select value={enteredColor} onChange={modifyColorChangeHandler} required>
                        <option value=''>Select Color</option>
                        <option value='Red'>Red</option>
                        <option value='White'>White</option>
                        <option value='Black'>Black</option>
                        <option value='Blue'>Blue</option>
                        <option value='Green'>Green</option>
                    </select>
                    <br></br>
                    {formNotCompleted &&
                        <div>
                            <p>The form is not filled out correctly</p>
                        </div>
                    }
                    <button type="submit" onClick={submitMyModifyCardHandler}>Edit</button>
                    <button type="submit" onClick={handleCloseModal}>Close</button>
                </form>
            </Modal>
        </div>

    );
};

export default CreatureRessources;