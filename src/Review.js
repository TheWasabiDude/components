import React from 'react';
import PropTypes from 'prop-types';

import './Review.scss';

export default class Review extends React.Component {

  printStars = number => {
    let stars = '';
    for (let i = 0; i < number; i++) {
      stars += '⭐'
    }
    return stars;
  } 

  render() {
    const { content, rating, submitter } = this.props;
    return <div className="review">
    {this.printStars(rating)} <br/> {content}
    </div>
  }

}

Review.propTypes = {
  content: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};