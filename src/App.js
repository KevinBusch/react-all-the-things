import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link, Route, Switch } from 'react-router-dom'
import { NestedRoutesExample } from "./nested-routes/nested-routes-example"
import { AsyncExample } from "./async/async-example"
import { HooksExample } from "./hooks/hooks-example"
import { ContextExample } from "./context/context-example"
import { ContextWithHooksExample } from "./context-with-hooks/context-with-hooks-example"
import { FallThrough } from "./fall-through/fall-through"
import { Home } from "./home/home"


class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={{width: 1000, margin: '0 auto'}}>
          <ul>
            <li><Link to='/'>1. Home</Link></li>
            <li><Link to='/nested-routes'>2. Nested Routes Example</Link></li>
            <li><Link to='/fallthrough-example-ASDFA;LKHVE;IOUAHFLIWEUHFLIUWEHF'>3. Fall Through Example</Link></li>
            <li><Link to='/async'>4. Async Example</Link></li>
            <li><Link to='/context'>5. Context Example</Link></li>
            <li><Link to='/hooks'>6. Hooks Example</Link></li>
            <li><Link to='/context-with-hooks'>7. Context With Hooks Example</Link></li>
          </ul>

          <hr />

          <Switch>  {/* <Switch /> allows for fallthrough component to only catch when none of the others are caught*/}
            <Route exact path='/' component={Home} />
            <Route path='/async' component={AsyncExample} />
            <Route path='/context' component={ContextExample} />
            <Route path='/context-with-hooks' component={ContextWithHooksExample} />
            <Route path='/hooks' component={HooksExample} />
            <Route path='/nested-routes' component={NestedRoutesExample} />
            <Route component={FallThrough} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
