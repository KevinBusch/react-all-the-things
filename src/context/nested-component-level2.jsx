import React                      from 'react';
import { AuthenticationContextConsumer } from './authentication-context';

export class NestedComponentLevel2 extends React.Component {
    render() {
			console.log("rendering nested-component-level2");
      return <AuthenticationContextConsumer>
        {(props) => {
			    console.log("rendering nested-component-level2 - content inside AuthenticationContextConsumer");
          return <React.Fragment>
            { props.isAuthenticated &&
              <React.Fragment>
                <label>Currently logged on as {props.loggedOnUser.name} with id of '{props.loggedOnUser.id}'</label><br />
                <button onClick = { props.logOff }>Log Off</button>
              </React.Fragment>
            }
            { !props.isAuthenticated &&
              <React.Fragment>
                <label>Not currently logged on as anyone</label><br />
                <button 
                  disabled = { props.isLoggingIn }
                  onClick = { () => props.logOn(2, 'Dorian') }>
                  Log On
                </button>
                { props.isLoggingIn && <label>Logging in...</label> }
              </React.Fragment>
            }
          </React.Fragment>
        }}
      </AuthenticationContextConsumer>
    }
  };
