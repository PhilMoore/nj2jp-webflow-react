import React from 'react';

import { propTypes } from './assets/propValidation';
import {
  WebflowJs,
} from './assets/utils';

import {
  CardReview,
} from './components';

class MasonryReviews extends React.Component {
  static propTypes = propTypes

  constructor(props) {
    super(props);

    this.state = {
      x: '',
    };
  }

  componentDidMount() {
    WebflowJs(); // eslint-disable-line
  }

  render() {
    const cardsData = [{
      image: {
        src: 'images/default-avatar.png',
        width: '194',
      },
      title: 'それは難しくない。 ただ違う。',
    },
    {
      image: {
        src: 'images/default-avatar.png',
        width: '194',
      },
      title: '私は本当に味が大好き',
    },
    {
      image: {
        src: 'images/default-avatar.png',
        width: '194',
      },
      title: '私は本当に味が大好きです',
    },
    {
      image: {
        src: 'images/default-avatar.png',
        width: '108',
      },
      title: '私の結婚を救った',
    }]
    return (
      <div className="masonry-container w-container">
        <div className="masonry-column">
          <div className="masonry-container masonry-container__news">
            <CardReview />
          </div>
        </div>
      </div>
    );
  }
}

export default MasonryReviews;
