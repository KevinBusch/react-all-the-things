import React from 'react';
import { topicRoutes } from './../../topic-routes';

export class Resource extends React.Component {
  componentDidUpdate() {
    console.log('Resource componentDidUpdate()');
  }
  componentWillUnmount() {
    console.log('Resource componentWillUnmount');
  }
  componentDidMount() {
    console.log('Resource componentDidMount');
  }
  render() {
    console.log('Resource render()');
    const { match } = this.props;
    const topic = topicRoutes.find(({ id }) => id === match.params.topicId)
      .resources.find(({ id }) => id === match.params.subId);

    return (
      <div>
        <h4>{topic.name}</h4>
        <p>{topic.description}</p>
        <a href={topic.url}>More info.</a>
      </div>
    )
  }
};
