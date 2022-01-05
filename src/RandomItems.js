import React from 'react';
import Item from './Item';

import './RandomItems.scss';

export default class RandomItems extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch('http://localhost/Eloquent/randomitems').then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText)
      }
    }).then(items => {
      this.setState({
        items: items.map(elem => {
          return {
            name: elem.name,
            description: elem.description,
            price: elem.price,
            media: elem.media
          };
        })
      })
    })
  }

  render() {
    return <div>
      <div className="randomItemsText"><h1>Tételek, amik érdekelhetnek</h1></div>
      <div className="randomItems">{this.state.items.map((elem) => <ul>
        <Item
          name={elem.name}
          price={elem.price}
          description={elem.description}
          media={elem.media}
        />
      </ul>)}</div>
      </div>
  }
}