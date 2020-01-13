import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch, hashHistory } from 'react-router-dom'
import App from './App.js'
import Details from './routes/details/details.js'

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/Details" component={Details}></Route>
    </Switch>
  </HashRouter>
)
export default BasicRoute