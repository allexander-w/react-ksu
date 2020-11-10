import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Login } from './login/Login'
import { Main } from './main/Main'
import { Settings } from './settings/Settings'
import { StudentBook } from './studentBook/StudentBook'

export const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Main} exact />
      <Route path='/settings' component={ Settings } />
      <Route path='/student-book' component={ StudentBook }  />
      <Route path='/login' component={ Login }  />
    </Switch> 
  )
}