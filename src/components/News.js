import React from 'react';
import NewsItem from './NewsItem';

import './News.scss';

export default class News extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      news: [
        { title: "Ez egy teszt hír", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { title: "Második teszt hír", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
      ]
    };
  }

  render() {
    return <div className="news">
      <h1>Hírek, újdonságok</h1>
      <div className="flex">
      {this.state.news.map((elem) => <ul>
        <NewsItem
          title={elem.title}
          content={elem.content}
        />
      </ul>)}
      </div>
      </div>
  }
}