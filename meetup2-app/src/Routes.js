import React from 'react';
import { BrowserRouter, Switch ,Route } from 'react-router-dom';
import Hello from './components/Hello';
import Goodbye from './components/Goodbye';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Hello}/>
        <Route path="/login" component={Goodbye} />
        <Route path="/login" component={Hello}/>
      </Switch>

    </BrowserRouter>
  )
}