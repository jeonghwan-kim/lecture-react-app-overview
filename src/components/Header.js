import React, {Component} from 'react';
import { Link } from 'react-router-dom';
const style = {
  borderBottom: '1px solid grey',
  padding: '30px 15px',
}
class Navbar extends Component {
  render () {
    return (
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/login">로그인</Link></li>
      </ul>
    );
  }
}
const Header = () => (
  <header style={style}>
    <h1>User Dashboard</h1>
    <Navbar />
  </header>
)

export default Header
