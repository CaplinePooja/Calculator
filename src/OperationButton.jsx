import React from 'react';
import { ACTIONS } from './App.jsx';

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { digit } })} // Fixed action type case
    >
      {operation}
    </button>
  );
}
