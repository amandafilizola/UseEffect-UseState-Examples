import React, { useState } from 'react';

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
      <div>{counter}</div>
      <button onClick={handleAdd}>ADICIONAR</button>
      <button onClick={handleDim}>SUBTRAIR</button>
    </div>
  );
}

export default App;
