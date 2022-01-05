import React from 'react';
import PropTypes from 'prop-types';

import './NewsItem.scss';

export default class NewsItem extends React.Component {

  render() {
    const { title, content } = this.props;

    return <div className="newsItem">
    <div className="title">{title}</div>
    <div className="content">{content}</div>
    </div>
  }

}

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};