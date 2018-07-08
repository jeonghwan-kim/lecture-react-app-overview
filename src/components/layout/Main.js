import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Topics from '../Topics';

const style = {
  padding: '0 15px 15px 10px'
}

const Main = () => (
  <main style={style}>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
  </main>
)

export default Main;
