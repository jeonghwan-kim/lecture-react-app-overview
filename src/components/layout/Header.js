import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Navbar extends Component {
  render () {
    return (
      <ul className="Header-menus">
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/login">로그인</Link></li>
      </ul>
    );
  }
}

const Header = () => (
  <header className="Header">
    <h1 className="Header-title">관리자 사이트</h1>
    <Navbar />
  </header>
)

export default Header
