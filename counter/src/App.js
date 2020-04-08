import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function handleAdd() {
    setCounter(counter + 1);
  }

  function handleDim() {
    setCounter(counter - 1);
  }

  return (
    <div className="App">

      <div className='card'>
        <div className='number'>{counter}</div>

        <div className='buttons'>
          <button onClick={handleAdd}>ADICIONAR</button>
          <button onClick={handleDim}>SUBTRAIR</button>
        </div>
      </div>

    </div>
  );
}

export default App;
