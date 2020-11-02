import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Main } from './main/Main'

export const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Main} exact />
    </Switch> 
  )
}