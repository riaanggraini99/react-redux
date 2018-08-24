import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Question from './pages/Question'
import Activities from './pages/activity'

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/question' component={Question} />
        <Route exact path='/activities' component={Activities} />
    </Switch>
)

export default Router;