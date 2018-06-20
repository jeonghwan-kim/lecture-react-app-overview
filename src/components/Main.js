import React from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import Login from './Login';

const style = {
  padding: '10px 15px'
}

const Main = () => (
  <main style={style}>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
    <Route path="/login" component={Login} />
  </main>
)

export default Main;
