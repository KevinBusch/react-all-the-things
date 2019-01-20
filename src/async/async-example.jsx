import React                      from 'react';

export class AsyncExample extends React.Component {

  constructor()
  {
    super();

    console.log("AuthenticationContextProvider constructor!");
    this.state = {
        albums: [],
    };
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums/');
    const json = await response.json();
    this.setState({ albums: json });
  }
  render() {
    return <ul>
      {this.state.albums.map((a, key) => <li key = { key }>
        <div>UserId: { a.userId }</div>
        <div>Id: { a.id }</div>
        <div>Title: { a.title }</div>
        </li>)}
    </ul>
  }
};
