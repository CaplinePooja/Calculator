import React from 'react';
import { ACTIONS } from './App.jsx';

export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })} // Fixed action type case
    >
      {digit}
    </button>
  );
}
