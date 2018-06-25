import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <header>
        <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
          <a className="brand-logo">Todo~ly</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/todos'}>Todos</Link></li>
            </ul>
          </div>
        </nav>
        </div>
      </header>
    )
  }
}

export default Header