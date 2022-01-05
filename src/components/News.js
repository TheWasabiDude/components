import React from 'react';

import './News.scss';

export default class News extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      news: { title: "Hatalmas akciók", content: "50% leárazás mindenki első vásárlásából, ha a végösszeg eléri az 50.000 Forintot!" },
    };
  }

  render() {
    const { title, content } = this.state.news;
    const visible = this.state

    if (visible) {
      return <div className="news">
      <div className="title">{title}</div>
      <div className="content">{content}</div>
      </div>
    }
  }
}