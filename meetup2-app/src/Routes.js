import React from 'react';
import { BrowserRouter, Switch ,Route } from 'react-router-dom';
import Hello from './components/Hello';
import Goodbye from './components/Goodbye';
import Header from './components/Header';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact component={Hello} />
        <Route path="/goodbye" component={Goodbye} />
      </Switch>
    </BrowserRouter>
  )
}