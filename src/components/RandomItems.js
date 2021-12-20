import React from 'react';
import Item from './Item';

import './RandomItems.scss';

export default class RandomItems extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Fejhallgató", price: "15000", media: "https://i.imgur.com/0S3MIlt.png" },
        { name: "Billentyűzet", price: "8000", media: "https://i.pinimg.com/originals/70/d7/d3/70d7d3fccc11ded2fd4c43c62027a60d.png" },
        { name: "Egér", price: "5000", media: "https://cdn.picpng.com/pc_mouse/download-pc-mouse-38085.png" },
        { name: "Mikrofon", price: "10000", media: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEVYwgeBqrbZ4m6PA5AZfTPG0rDqB-RLMPQ&usqp=CAU" },
      ]
    };
  }

  render() {
    return <div className="randomItems">{this.state.items.map((elem) => <ul>
      <Item
        name={elem.name}
        price={elem.price}
        media={elem.media}
      />
    </ul>)}</div>
  }
}