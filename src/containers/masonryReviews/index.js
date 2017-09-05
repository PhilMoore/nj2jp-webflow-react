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
      title: 'Its not hard. Its just&nbsp;different.',
    },
    {
      image: {
        src: 'images/default-avatar.png',
        width: '194',
      },
      title: 'I really love the flavour',
    },
    {
      image: {
        src: 'images/default-avatar.png',
        width: '194',
      },
      title: 'I cant belive it was that easy!',
    },
    {
      image: {
        src: 'images/default-avatar.png',
        width: '108',
      },
      title: 'Saved my Marriage',
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
