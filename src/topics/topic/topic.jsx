import React from 'react';
import { Link, Route } from 'react-router-dom'
import { topicRoutes } from './../topic-routes';
import { Resource } from './resource/resource';

export class Topic extends React.Component {
    componentDidUpdate() {
      console.log('Topic componentDidUpdate()');
    }
    componentWillUnmount() {
      console.log('Topic componentWillUnmount');
    }
    render() {
      const { match } = this.props;
      console.log('Topic render()');
      const topic = topicRoutes.find(({ id }) => id === match.params.topicId)
  
      return (
        <div>
          <h2>{topic.name}</h2>
          <p>{topic.description}</p>
  
          <ul>
            {topic.resources.map((sub) => (
              <li key={sub.id}>
                <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
              </li>
            ))}
          </ul>
  
          <hr />
  
          <Route path={`${match.path}/:subId`} component={Resource} />
        </div>
      )
    }
  };
