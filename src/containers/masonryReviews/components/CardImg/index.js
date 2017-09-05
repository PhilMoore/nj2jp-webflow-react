import React from 'react';

import { WebflowJs } from './assets/utils';

const CardImg = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <img
      className="reviews-content__image"
      role="presentation"
      sizes="(max-width: 479px) 75vw, 195px"
      src="images/default-avatar.png"
      width="194"
    />
  );
};


export default CardImg;
