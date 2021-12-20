import React from 'react';

import './Header.scss';

export default class Header extends React.Component {

  render() {
    return <div className="header">
      <ul>
        <li>Főoldal</li>
        <li>Termékek</li>
        <li>Kapcsolat</li>
        <li style={{float: "right"}}>Bejelentkezés</li>
        <li className="noHover" style={{float: "right"}}><button type="button">Keresés</button> <input type="text" placeholder="Keresés"></input></li>
      </ul>
    </div>
  }
}