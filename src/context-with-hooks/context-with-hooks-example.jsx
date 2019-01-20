import React                      from 'react';
import { AuthenticationContextProvider } from './authentication-context';
import { NestedComponentLevel1 } from './nested-component-level1';

export function ContextWithHooksExample () {
  return <React.Fragment>
    <h1>
      Context With Hooks Example
    </h1>
    <AuthenticationContextProvider>
      <NestedComponentLevel1 />
    </AuthenticationContextProvider>
  </React.Fragment>
};
