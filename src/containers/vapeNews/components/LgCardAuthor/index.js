import React from 'react';

import { WebflowJs } from './assets/utils';

const LgCardAuthor = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="section-container__author" data-ix="fade-down-5">
      <div className="author__image-container">
        <img
          className="top-section"
          role="presentation"
          src="images/IMG_7048-1-150x150.jpg"
        />
      </div>
      <div className="author__text-container" data-ix="fade-down-6">
        <p className="text-container--blurb">
          By Diane Caruana
        </p>
      </div>
    </div>
  );
};


export default LgCardAuthor;
