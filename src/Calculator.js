import React, { useState } from 'react';

const Calculator = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    const input = e.target.value;

    // Clear the input
    if (input === 'C') {
      setValue('');
      setResult('');
      return;
    }

    // Evaluate the expression
    if (input === '=') {
      if (!value.trim()) {
        setResult('Error');
        return;
      }

      try {
        // Handle special cases
        if (value === '0/0') {
          setResult('NaN');
        } else {
          const evaluation = eval(value); // Use eval for simplicity here
          setResult(evaluation === Infinity ? 'Infinity' : evaluation);
        }
      } catch (err) {
        setResult('Error');
      }
      return;
    }

    // Append input to the value
    setValue(value + input);
  };

  return (
    <div className="calc-div">
      <h1>React Calculator</h1>
      <br />
      <input value={value}/>
     
      <div className="result-display">{result}</div>
      <br />
      <div className="button-group">
        {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/'].map((btn) => (
          <button
            key={btn}
            className="calc-button"
            value={btn}
            onClick={handleClick}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
