import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link, Route } from 'react-router-dom'
import { NestedRouteExample } from "./nested-routes/nested-route-example"
import { HookExample } from "./hooks/hook-example"
import { Home } from "./home/home"


class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={{width: 1000, margin: '0 auto'}}>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/hooks'>Hooks Example</Link></li>
            <li><Link to='/nested-routes'>Nested Routes Example</Link></li>
          </ul>

          <hr />

          <Route exact path='/' component={Home} />
          <Route path='/hooks' component={HookExample} />
          <Route path='/nested-routes' component={NestedRouteExample} />
        </div>
      </Router>
    )
  }
}

export default App
