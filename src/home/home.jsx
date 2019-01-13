import React from 'react';

export class Home extends React.Component {
    componentDidUpdate() {
      console.log('Home componentDidUpdate()');
    }
    componentWillUnmount() {
      console.log('Home componentWillUnmount');
    }
    render() {
      console.log('Home render()');
      return (
        <h1>Home</h1>
      )
    }
  };
