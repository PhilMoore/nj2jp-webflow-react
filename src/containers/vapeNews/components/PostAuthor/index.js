import React from 'react';

import { WebflowJs } from './assets/utils';

const PostAuthor = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="blurb-container__author-info">
      <div className="author-info__author-img--container">
        <img
          className="container--img"
          role="presentation"
          src="images/P1100442-150x150.jpg"
        />
      </div>
      <div className="author-info__author-text--container">
        <p className="text-container--blurb">
          By Jérôme Harlay
        </p>
      </div>
    </div>
  );
};


export default PostAuthor;
