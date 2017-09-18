import React from 'react';

import { WebflowJs } from './assets/utils';

const HdrAuthorImg = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="top-section__author-info" data-ix="fade-down-3">
      <div className="author-info__author-img--container">
        <img
          className="container--img"
          role="presentation"
          src="images/P1100442-150x150.jpg"
        />
      </div>
      <div className="author-info__author-text--container">
        <p className="container--blurb">
          By Jérôme Harlay
        </p>
      </div>
    </div>
  );
};


export default HdrAuthorImg;
