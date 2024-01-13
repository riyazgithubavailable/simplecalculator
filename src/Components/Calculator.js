import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  /*const validateInput = () => {
    setError('');

    if (!num1 || !num2 || isNaN(Number(num1)) || isNaN(Number(num2))) {
      setError('Error!');
      setSuccess('');
      setResult('');
      return false;
    }
      else{
        setSuccess('Success!')
        setError('');
       return true;
      }
      if (input1.trim() === "" || input2.trim() === "") {
        setError("Both input fields are required.");
        setResult("");
        return false;
      }
  
      if (isNaN(input1) || isNaN(input2)) {
        setError("Please enter valid numbers.");
        setInput1("");
        setInput2("");
        setResult("")
        return false;
  
      }
  
      setError("");
      return true;
    
  };*/
  const validateInput = () => {
    // Check if inputs are not empty and are valid numbers
    if (num1.trim() === "" || num2.trim() === "") {
      setError("Both input fields are required.");
      setResult("");
      return false;
    }

    if (isNaN(num1) || isNaN(num2)) {
      setError("Please enter valid numbers.");
      setNum1("");
      setNum2("");
      setResult("")
      return false;

    }

    setError("");
    return true;
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
      {/* {error &&<div style={{ color: 'red' }}>{error}</div>}
      {success &&<div style={{ color: 'blue' }}>{success}</div>}
      {result && <div style={{ color: 'black' }}>{result}</div>} */}
       {error && <p className="error">Error!<span>{error}</span></p>}
      {result && <p className="success">Success!<span>{result}</span></p>}
      </div>
    </div>

  );
};

export default Calculator;


