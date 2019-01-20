import React                      from 'react';
import { AuthenticationContextConsumer } from './authentication-context';

export class NestedComponentLevel2 extends React.Component {
    render() {
      return <AuthenticationContextConsumer>
        {({ isAuthenticated, loggedOnUser, logOff, logOn }) => {
          return <React.Fragment>
            { isAuthenticated &&
              <React.Fragment>
                <label>Currently logged on as {loggedOnUser.name} with id of '{loggedOnUser.id}'</label><br />
                <button onClick = { logOff }>Log Off</button>
              </React.Fragment>
            }
            { !isAuthenticated &&
              <React.Fragment>
                <label>Not currently logged on as anyone</label><br />
                <button onClick = { () => logOn(2, 'Dorian') }>Log On</button>
              </React.Fragment>
            }
          </React.Fragment>
        }}
      </AuthenticationContextConsumer>
    }
  };
