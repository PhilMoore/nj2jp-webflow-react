import React from 'react';

import { WebflowJs } from './assets/utils';

const HdrAuthorImg = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="news__top-article top-article--author" data-ix="fade-down-3">
      <img className="author__image" role="presentation" src="images/P1100442-150x150.jpg" width="31" />
      <p className="author__text text--top">By Jérôme Harlay
      </p>
    </div>
  );
};


export default HdrAuthorImg;
