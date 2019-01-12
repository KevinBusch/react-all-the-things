import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link, Route } from 'react-router-dom'
import { Topics } from "./topics/topics"
import { Home } from "./home/home"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={{width: 1000, margin: '0 auto'}}>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
          </ul>

          <hr />

          <Route exact path='/' component={Home} />
          <Route path='/topics' component={Topics} />
        </div>
      </Router>
    )
  }
}

export default App
