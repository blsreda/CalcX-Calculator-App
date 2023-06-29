import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INPUT':
      return {
        ...state,
        currentOperand: state.currentOperand + action.payload,
      };
    case 'CLEAR':
      return {
        ...state,
        currentOperand: '',
      };
    case 'EQUALS':
      try {
        const result = eval(state.currentOperand);
        return {
          ...state,
          currentOperand: result.toString(),
        };
      } catch (error) {
        return {
          ...state,
          currentOperand: 'Error',
        };
      }
    default:
      return state;
  }
}

function App() {
  const initialState = {
    currentOperand: '0',
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleButtonClick = (value) => {
    dispatch({ type: 'INPUT', payload: value });
  };

  const handleClear = () => {
    dispatch({ type: 'CLEAR' });
  };

  const handleEquals = () => {
    dispatch({ type: 'EQUALS' });
  };

  return (
    <div className="calculator-grid">
      <h1>CalcX Calculator App</h1>
      <div className="output">
        <div className="previous-operand">{state.previousOperand}</div>
        <div className="current-operand">{state.currentOperand}</div>
      </div>
      <button className="span-two" onClick={handleClear}>
        Ac
      </button>
      <button onClick={() => handleButtonClick('/')}>÷</button>
      <button onClick={() => handleButtonClick('1')}>1</button>
      <button onClick={() => handleButtonClick('2')}>2</button>
      <button onClick={() => handleButtonClick('3')}>3</button>
      <button onClick={() => handleButtonClick('+')}>+</button>
      <button onClick={() => handleButtonClick('4')}>4</button>
      <button onClick={() => handleButtonClick('5')}>5</button>
      <button onClick={() => handleButtonClick('6')}>6</button>
      <button onClick={() => handleButtonClick('*')}>x</button>
      <button onClick={() => handleButtonClick('7')}>7</button>
      <button onClick={() => handleButtonClick('8')}>8</button>
      <button onClick={() => handleButtonClick('9')}>9</button>
      <button onClick={() => handleButtonClick('-')}>-</button>
      <button className="zero" onClick={() => handleButtonClick('0')}>
        0
      </button>
      <button className="span-two" onClick={handleEquals}>
        =
      </button>
    </div>
  );
}

export default App;
