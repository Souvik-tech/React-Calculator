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
      <input value={value} type='text'/>
     
      <div className="result-display">{result}</div>
      <br />
      <div className="button-group">
       
          <button
           
            className="calc-button"
            value="7"
            onClick={handleClick}
          >
            7
          </button>
          <button
           
           className="calc-button"
           value="8"
           onClick={handleClick}
         >
           8
         </button>
         <button
           
           className="calc-button"
           value="9"
           onClick={handleClick}
         >
           9
         </button>
         <button
           
           className="calc-button"
           value="+"
           onClick={handleClick}
         >
           +
         </button>
         <button
           
           className="calc-button"
           value="4"
           onClick={handleClick}
         >
           4
         </button>
         <button
           
           className="calc-button"
           value="5"
           onClick={handleClick}
         >
           5
         </button>
         <button
           
           className="calc-button"
           value="6"
           onClick={handleClick}
         >
           6
         </button>
         <button
           
           className="calc-button"
           value="-"
           onClick={handleClick}
         >
           -
         </button>
         <button
           
           className="calc-button"
           value="1"
           onClick={handleClick}
         >
           1
         </button>
         <button
           
           className="calc-button"
           value="2"
           onClick={handleClick}
         >
           2
         </button>
         <button
           
           className="calc-button"
           value="3"
           onClick={handleClick}
         >
           3
         </button>
         <button
           
           className="calc-button"
           value="*"
           onClick={handleClick}
         >
           *
         </button>
         <button
           
           className="calc-button"
           value="C"
           onClick={handleClick}
         >
           C
         </button>
         <button
           
           className="calc-button"
           value="0"
           onClick={handleClick}
         >
           0
         </button>
         <button
           
           className="calc-button"
           value="="
           onClick={handleClick}
         >
           =
         </button>
         <button
           
           className="calc-button"
           value="/"
           onClick={handleClick}
         >
           /
         </button>

       
      </div>
    </div>
  );
};

export default Calculator;
