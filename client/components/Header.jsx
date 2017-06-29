import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div className="navbar-logo"><a href="#"></a></div>
        <div className="navbar-title">
          <div className="title">
            <h2>myCareer</h2>
          </div>
          <div className="subtitle">
            <h4>Recruiting & Career Management System (CMS)</h4>
          </div>
        </div>
        <div className="navbar-links">
          <ul className="fa-ul">
            <li>
              <a><span><i className="fa-li fa fa-lightbulb" aria-hidden="true"></i></span></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
