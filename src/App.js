import React, { useState } from "react";
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const handleButtonCLick = (value) => {
    setInput((prevInput) => prevInput + value)
  }
  const handleCalculate = () => {
    try {
      let a = eval(input);
      setResult(a.toString());
    } catch (error) {
      setResult('Error');
    }
  };
  const handleClear = () => {
    setInput('');
    setResult('');
  }
  return (
    <div className="container" >
      <h1>React Calculator</h1>
      <div>
        <input type="text" value={input}>
        </input>
      </div>
      {result && <div className="result"> {result} </div>}
      <div className="buttonContainer">
        <div className="row">
          <button onClick={() => handleButtonCLick('7')}>7</button>
          <button onClick={() => handleButtonCLick('8')}>8</button>
          <button onClick={() => handleButtonCLick('9')}>9</button>
          <button onClick={() => handleButtonCLick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonCLick('4')}>4</button>
          <button onClick={() => handleButtonCLick('5')}>5</button>
          <button onClick={() => handleButtonCLick('6')}>6</button>
          <button onClick={() => handleButtonCLick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonCLick('1')}>1</button>
          <button onClick={() => handleButtonCLick('2')}>2</button>
          <button onClick={() => handleButtonCLick('3')}>3</button>
          <button onClick={() => handleButtonCLick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleButtonCLick('0')}>0</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleButtonCLick('/')}>/</button>
        </div>

      </div>

    </div>
  );
}

export default App;
