import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';


const AuthenticationContext = React.createContext();

export function AuthenticationContextProvider (props) {

  const signal = axios.CancelToken.source();

  // #region State
  const [session, setSession] = useState({
    isAuthenticated: false,
    isLoggingIn:     false,
    loggedOnUser:    null
  });
  // #endregion State

  const logIn = async () => {
    // test above logic
    const response = await axios('https://jsonplaceholder.typicode.com/albums/', { cancelToken: signal.token });
    console.log(response.data);
    setSession({
      isAuthenticated: true,
      isLoggingIn:     false,
      loggedOnUser: {
        id:          1,
        isLoggingIn: false,
        name:        'Kevin Busch'
      }
    });
  }

  // #region Effects
  useEffect(() => {
    if (session.isLoggingIn) {
      logIn();
    }
    
    // cleanup
    return () => {
      console.log("cleaning up any api requests");
      signal.cancel('Canceling any api requests');
    }
  },
  [session.isLoggingIn]);
  // #endregion Effects

  // #region Callbacks
  const logOff = useCallback(() => {
    setSession({
      isAuthenticated: false,
      isLoggingIn:     false,
      loggedOnUser:    null,
    })
  })
  const logOn = useCallback(() => {
    setSession({
      // isAuthenticated: false,
      isLoggingIn:     true,
      // loggedOnUser:    null,
    })
  })
  // #endregion Callbacks

  const { children } = props;

  return (
    <AuthenticationContext.Provider
      // The 'value' property is what is passed down to children components
      value={{
        isAuthenticated: session.isAuthenticated,
        isLoggingIn:     session.isLoggingIn,
        loggedOnUser:    session.loggedOnUser,
        logOff:     		 logOff,
        logOn:           logOn,
      }}
    >
      { children }
      <div>isAuthenticated: {session.isAuthenticated}</div>
      <div>isLoggingIn: {session.isLoggingIn}</div>
      <div>loggedOnUser: {JSON.stringify(session.loggedOnUser)}</div>
    </AuthenticationContext.Provider>
  );
}

/**
 * Export the consumer here
 */
export const AuthenticationContextConsumer = AuthenticationContext.Consumer;
