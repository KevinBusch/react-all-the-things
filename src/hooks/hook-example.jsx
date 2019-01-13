import React, { useState } from 'react';

/**
 * See https://medium.freecodecamp.org/the-react-handbook-b71c27b0a795
 */
export function HookExample () {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onCLick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
};
