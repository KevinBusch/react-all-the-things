import React from 'react';
import { Link, Route } from 'react-router-dom'
import { topicRoutes } from './topic-routes';
import { Topic } from './topic/topic';

export class Topics extends React.Component {
  
    componentDidUpdate() {
      console.log('Topics componentDidUpdate()');
    }
    componentWillUnmount() {
      console.log('Topics componentWillUnmount');
    }
    render() {
      const { match } = this.props;
      console.log('Topics render()');
      return (
        <div>
          <h1>Topics</h1>
          <ul>
            {topicRoutes.map(({ name, id }) => (
              <li key={id}>
                <Link to={`${match.url}/${id}`}>{name}</Link>
              </li>
            ))}
          </ul>
  
          <hr />
  
          <Route path={`${match.path}/:topicId`} component={Topic}/>
        </div>
      )
    }
  };
