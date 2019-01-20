import React                      from 'react';
import { AuthenticationContextProvider } from './authentication-context';
import { NestedComponentLevel1 } from './nested-component-level1';

export class ContextExample extends React.Component {
    render() {
      return <React.Fragment>
        <h1>
          Context Example
        </h1>
        <AuthenticationContextProvider>
          <NestedComponentLevel1 />
        </AuthenticationContextProvider>
      </React.Fragment>
    }
  };
