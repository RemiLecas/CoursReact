import React, {useReducer } from "react";

// Variabale + function qui retourne du JSx ==> composant

  const compteur = {
    count: 0
}
  
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      case 'reset':
        return {count: state.count = 0};
      default:
        throw new Error();
    }
  }
  
  const Count = () => {
    const [state, dispatch] = useReducer(reducer, compteur);
    return (
      <>
        Count: {state.count}
        <button
          onClick={() => dispatch({type: 'reset'})}>
          Reset
        </button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </>
    );
  }
  

export default Count;