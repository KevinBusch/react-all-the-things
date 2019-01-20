import React from 'react';
import axios from 'axios';

export class AsyncExample extends React.Component {
    // axios removes necessity to have AbortController (unlike fetch).  Handles under the hood (but in a backwards compatible way?)
  signal = axios.CancelToken.source();

  constructor()
  {
    super();

    this.state = {
        albums: [],
    };
  }

  async componentDidMount() {
    // axios removes necessity to handle response body formatting (unlike fetch)... already returned in `response.data`
    const response = await axios('https://jsonplaceholder.typicode.com/albums/', { cancelToken: this.signal.token });
    console.log(response.data);
    this.setState({ albums: response.data });
  }
  render() {
    return <React.Fragment>
      <h1>
        Async Example
      </h1>
      <ul>
        {this.state.albums.map((a, key) => <li key = { key }>
          <div>UserId: { a.userId }</div>
          <div>Id: { a.id }</div>
          <div>Title: { a.title }</div>
          </li>)}
      </ul>
    </React.Fragment>
  }
};
