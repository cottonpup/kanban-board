import React, { useReducer } from 'react';
import Column from './Column';

export default function Board() {
  const initialState = {
    TODO: [],
    PROGRESS: [],
    DONE: [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_CARD': {
        const columnID = action.payload.column;
        return {
          ...state,
          [columnID]: [
            ...state[columnID],
            { text: action.payload.newCard, id: action.payload.id },
          ],
        };
      }

      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex justify-center content-center space-x-5 mx-10 my-4">
      {Object.keys(state).map((col) => (
        <Column
          key={col}
          label={col}
          addCard={(e) => {
            e.preventDefault();
            dispatch({
              type: 'ADD_CARD',
              payload: { newCard: e.target[0].value, id: Date.now(), column: col },
            });
            e.target[0].value = '';
          }}
          cards={state[col]}
        ></Column>
      ))}
    </div>
  );
}
