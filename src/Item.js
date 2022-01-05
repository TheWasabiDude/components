import React from 'react';
import PropTypes from 'prop-types';

import './Item.scss';

export default class Item extends React.Component {

  render() {
    const { name, price, description, media } = this.props;

    return <div className="item">
    <img className="itemPicture" src={media} width="150"></img>
    <div className="title">{name}</div>
    <div>{description}<br/>{price} Ft</div>
    </div>
  }

}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
};