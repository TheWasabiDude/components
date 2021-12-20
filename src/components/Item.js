import React from 'react';
import PropTypes from 'prop-types';

import './Item.scss';

export default class Item extends React.Component {

  render() {
    const { name, price, media } = this.props;

    return <div className="item">
    <img src={media} width="150"></img>
    <div className="title">{name}</div>
    <div>{price} Ft</div>
    </div>
  }

}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
};