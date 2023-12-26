import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  
  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '%') {
      const percentage = (parseFloat(input) / 100).toString();
      setInput(percentage);
      setResult(percentage);
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="keypad">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('C')}>C</button>
        <button onClick={() => handleClick('%')}>%</button>
      </div>
      <div className="result">
        <p>{result}</p>
      </div>
    </div>
  );
};

export default Calculator;
