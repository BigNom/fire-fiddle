import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullLamb from './FullLamb'
import Player from './Player'

// The Roster component matches one of two different routes
// depending on the full pathname
const Lamb = () => (
  <Switch>
    <Route exact path='/lamb' component={FullLamb}/>
    <Route path='/lamb/:number' component={Player}/>
  </Switch>
)


export default Lamb
