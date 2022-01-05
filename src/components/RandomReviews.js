import React from 'react';
import Review from './Review';

import './RandomReviews.scss';

export default class RandomReviews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    fetch('http://localhost/Eloquent/randomreviews').then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText)
      }
    }).then(reviews => {
      this.setState({
        reviews: reviews.map(elem => {
          return {
            content: elem.content,
            rating: elem.rating,
            submitter: elem.submitter
          };
        })
      })
    })
  }

  render() {
    return <div>
      <div className="randomReviewsText"><h1>Legutóbbi értékeléseink</h1></div>
      <div className="randomReviews">{this.state.reviews.map((elem) => <ul>
        <Review
          rating={elem.rating}
          content={elem.content}
          submitter={elem.submitter}
        />
      </ul>)}</div>
      </div>
  }
}