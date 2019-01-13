import React from 'react';
import { Route } from 'react-router-dom'
import { Topics } from './topics/topics';

/**
 * See https://tylermcginnis.com/react-router-nested-routes/
 */
export class NestedRoutesExample extends React.Component {
  
    componentDidUpdate() {
      console.log('NestedRoutesExample componentDidUpdate()');
    }
    componentWillUnmount() {
      console.log('NestedRoutesExample componentWillUnmount');
    }
    render() {
      console.log('NestedRoutesExample render()');
      const { match } = this.props;
      return (
        <React.Fragment>
          <h1>Nested Routes</h1>
          <Route path={`${match.path}`} component={Topics} />
        </React.Fragment>
      );
    }
  };
