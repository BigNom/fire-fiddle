import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Roster from './Roster'
import Schedule from './Schedule'
import Contacts from './Contacts'
import Contact from './Contact'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
      <Route path='/contacts' component={Contacts} />
      <Route path='contacts/:id' component={Contact} />
    </Switch>
  </main>
)

export default Main