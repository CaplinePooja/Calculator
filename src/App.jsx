import React from 'react';
import { useReducer } from 'react';
import './style.css';
import DigitButton from './DigitButton.jsx'; // Ensure this matches the file name exactly

export const ACTIONS = {
  ADD_DIGIT: 'add-digit', // Ensure the action type casing matches
  CHOOSE_OPERATION:'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT: // Ensure this matches the action type defined above
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      }
    default:
      return state;
  }
}


function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer,
    {})


  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand} {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <DigitButton digit="/" dispatch={dispatch} /> 
      <DigitButton digit="1" dispatch={dispatch} /> 
      <DigitButton digit="2" dispatch={dispatch} /> 
      <DigitButton digit="3" dispatch={dispatch} /> 
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
