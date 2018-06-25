import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;