import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const validateInput = () => {
    setError('');

    if (!num1 || !num2 || isNaN(Number(num1)) || isNaN(Number(num2))) {
      setError('Error!');
      return false;
    }
      else{
        setSuccess('Success!')
       return true;
      }
  };

  const handleOperation = (operation) => {
    if (validateInput()) {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);

      switch (operation) {
        case 'add':
          setResult(`Result: ${number1 + number2}`);
          break;
        case 'subtract':
          setResult(`Result: ${number1 - number2}`);
          break;
        case 'multiply':
          setResult(`Result: ${number1 * number2}`);
          break;
        case 'divide':
          if (number2 !== 0) {
            setResult(`Result: ${number1 / number2}`);
          } else {
            setError('Cannot divide by zero.');
          }
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className='calculator'>
      
      <div className='box'>
      <h2>React Calculator</h2>
      <div>
        <input type="text" placeholder='Num1' value={num1} onChange={(e) => setNum1(e.target.value)} />
        </div>
      <div>
           <input type="text" placeholder='Num2' value={num2} onChange={(e) => setNum2(e.target.value)} />
        </div>
      <div>
        <button onClick={() => handleOperation('add')}>+</button>
        <button onClick={() => handleOperation('subtract')}>-</button>
        <button onClick={() => handleOperation('multiply')}>*</button>
        <button onClick={() => handleOperation('divide')}>/</button>
      </div>
      {error &&<div style={{ color: 'red' }}>{error}</div>}
      {success &&<div style={{ color: 'blue' }}>{success}</div>}
      {result && <div style={{ color: 'black' }}>{result}</div>}
      </div>
    </div>

  );
};

export default Calculator;


