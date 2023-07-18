import React, { useState } from 'react';

function App2() {
  // Define state using useState hook
  const [count, setCount] = useState(0);

  // Event handler for incrementing the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Event handler for decrementing the count
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter App using React Hooks</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App2;
