import React, { Component } from 'react';

const AuthenticationContext = React.createContext();

/**
 * Export the provider here
 */
export class AuthenticationContextProvider extends Component {
  constructor(props) {
    super(props);

    console.log("AuthenticationContextProvider constructor!");
    this.state = {
        isAuthenticated: true,
        loggedOnUser: { 
            id:   1, 
            name: 'Kevin Busch'
        },
    };
  }

  logOff = () => {
    this.setState({
        isAuthenticated: false,
        loggedOnUser: null,
    });
  };

  logOn = (id, name) => {
    this.setState({
        isAuthenticated: true,
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
        value={{
					isAuthenticated: this.state.isAuthenticated,
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
