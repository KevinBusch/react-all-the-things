import React, { useCallback, useEffect, useState } from 'react';

/**
 * See https://medium.freecodecamp.org/the-react-handbook-b71c27b0a795#073c
 * 
 * This is a functional component showcasing the capabilities of using hooks to handle state, effects, and binding callbacks
 */
export function HooksExample () {

  //#region useState()
  // Generates a new state variable, first being the variable being set and second being the function used to set it, then returns array  
  console.log("useState(): count()");
  const [count, setCount] = useState(0); // using array destructuring
  console.log("useState(): name()");
  const [name, setName] = useState('Flavio'); //  using array destructuring
  //#endregion

  //#region useEffect()
  // Used to take place of componentDidMount, componentDidUpdate, and ComponentDidUnmount.
  // Also does this without blocking UI rendering (NEAT!)

  // every render
  useEffect(() => {
    console.log(`useEffect(): rendered/rerendered`)
  });

  // only on mount
  useEffect(() => {
    console.log(`useEffect(): Component mounted`)
  },
    [] // empty array informs component to use this effect on mount
  );

  // name is changing
  useEffect(() => {
    console.log(`useEffect(): Name is "${name}" when rendering/re-rendering`)

    // cleanup
    return () => {
      console.log(`useEffect(): Name - Cleanup (Not unmount component)`)
    }
  },
    [name]
  );

  // count is changing
  useEffect(() => {
    console.log(`useEffect(): Count is "${count}" when rendering/re-rendering`)

    // cleanup
    return () => {
      console.log(`useEffect(): Count - Cleanup (Not unmount component)`)
    }
  },
    [count]
  );
  //#endregion

  //#region useCallback()

  const handleCountClick = useCallback(() => {
    console.log("useCallback(): handleCountClick()");
    setCount(count + 1) 
  });
  const handleNameClick = useCallback(() => { 
    console.log("useCallback(): handleNameClick()");
    setName(name === 'Flavio' ? 'Roger' : 'Flavio') 
  });

  //#endregion

  //#region useCustom()
  // A custom hook is one that is a function that conventionally starts with `use` and can accept an arbitrary # of args and return anything
  const useMyCustomGetData = () => {
    // 
    console.log("useMyCustomGetData");
    return "";
  }

  //#endregion

  //#region render

  return (
    <React.Fragment>
      <h1>
        Hooks Example
      </h1>
      <div>
        <p>
          Hi { name } you clicked { count } times
        </p>
        <button onClick={ handleCountClick }>Click me</button>
        <button onClick={ handleNameClick }>Change name</button>
      </div>
    </React.Fragment>
  )

  //#endregion
};
