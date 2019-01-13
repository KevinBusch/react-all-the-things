import React from 'react';
import { Route } from 'react-router-dom'
import { Topics } from './topics/topics';

/**
 * See https://tylermcginnis.com/react-router-nested-routes/
 */
export class NestedRouteExample extends React.Component {
  
    componentDidUpdate() {
      console.log('NestedRouteExample componentDidUpdate()');
    }
    componentWillUnmount() {
      console.log('NestedRouteExample componentWillUnmount');
    }
    render() {
      console.log('NestedRouteExample render()');
      const { match } = this.props;
      return <Route path={`${match.path}`} component={Topics} />
    }
  };
