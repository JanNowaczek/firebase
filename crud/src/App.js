import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './components/Menu'
import List from './components/List'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Route exact path="/" component={List} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/read/:id" component={Read} />
        <Route exact path="/update/:id" component={Update} />
      </BrowserRouter>
    );
  }
}

export default App;