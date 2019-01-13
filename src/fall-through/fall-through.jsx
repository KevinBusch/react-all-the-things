import React from 'react';

export class FallThrough extends React.Component {
    componentDidUpdate() {
      console.log('FallThrough componentDidUpdate()');
    }
    componentWillUnmount() {
      console.log('FallThrough componentWillUnmount');
    }
    render() {
      console.log('FallThrough render()');
      return (
        <h1>Fall Through</h1>
      )
    }
  };
