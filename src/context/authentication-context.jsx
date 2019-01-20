import React, { Component } from 'react';
import axios from 'axios';


const AuthenticationContext = React.createContext();

/**
 * Export the provider here
 */
export class AuthenticationContextProvider extends Component {

   // axios removes necessity to have AbortController (unlike fetch).  Handles under the hood (but in a backwards compatible way?)
  signal = axios.CancelToken.source();

  constructor(props) {
    super(props);

    console.log("AuthenticationContextProvider constructor!");
    this.state = {
        isAuthenticated: true,
        loggedOnUser: { 
            id:          1, 
            isLoggingIn: false,
            name:        'Kevin Busch'
        },
    };
  }

  componentWillUnmount() {
    console.log("cleaning up any api requests");
    this.signal.cancel('Canceling any api requests');
  }

  logOff = () => {
    this.setState({
        isAuthenticated: false,
        loggedOnUser: null,
    });
  };

  logOn = async (id, name) => {
    this.setState({
        isLoggingIn: true,
    });
    const response = await axios('https://jsonplaceholder.typicode.com/albums/', { cancelToken: this.signal.token });
    this.setState({
        isAuthenticated: true,
        isLoggingIn: false,
        loggedOnUser: {
            id:   id,
            name: name,
        },
    });
  };

  render() {
    const { children } = this.props;

    return (
      <AuthenticationContext.Provider
        // The 'value' property is what is passed down to children components
        value={{
          isAuthenticated: this.state.isAuthenticated,
          isLoggingIn:     this.state.isLoggingIn,
					loggedOnUser:    this.state.loggedOnUser,
          logOff:     		 this.logOff,
					logOn:           this.logOn,
        }}
      >
        {/* NOTE: Additional UI could be shown here */}
      
        { children }
      </AuthenticationContext.Provider>
    );
  }
}

/**
 * Export the consumer here
 */
export const AuthenticationContextConsumer = AuthenticationContext.Consumer;
