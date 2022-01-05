import React from 'react';

import './Header.scss';

export default class Header extends React.Component {

  render() {
    return <div className="header">
      <ul>
        <li>Főoldal</li>
        <li>Termékek</li>
        <li>Kategóriák</li>
        <li>Kapcsolat</li>
        <li style={{ float: "right" }}>Bejelentkezés</li>
      </ul>
    </div>
  }
}