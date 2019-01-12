import React from 'react';
import { Link, Route } from 'react-router-dom'
import { topicRoutes } from './../../topic-routes';

export class Resource extends React.Component {
  componentDidUpdate() {
    console.log('Resource componentDidUpdate()');
  }
  componentWillUnmount() {
    console.log('Resource componentWillUnmount');
  }
  render() {
    console.log('Resource render()');
    return <p>RESOURCE</p>
  }
};
