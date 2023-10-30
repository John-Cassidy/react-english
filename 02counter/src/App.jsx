import './App.css';

import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter((prevCounter) => addFunction(prevCounter));

    function addFunction(prevCounter) {
      const newCounter = prevCounter + 1;
      console.log(newCounter);
      return newCounter;
    }
  };

  const removeValue = () => {
    setCounter((prevCounter) => removeFunction(prevCounter));

    function removeFunction(prevCounter) {
      const newCounter = prevCounter - 1;
      console.log(newCounter);
      return newCounter;
    }
  };

  return (
    <>
      <h1>React Counter Project {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>{' '}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
