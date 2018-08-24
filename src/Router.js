import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Question from './pages/Question'


const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/question' component={Question} />
    </Switch>
)

export default Router;