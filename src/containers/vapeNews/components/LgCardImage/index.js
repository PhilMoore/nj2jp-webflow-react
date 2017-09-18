import React from 'react';

import { WebflowJs } from './assets/utils';

const LgCardImage = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <a
      className="section-container__image-container w-inline-block"
      data-ix="fade-down-4"
      href="https://www.vapingpost.com/2016/08/30/japan-the-explosion-of-vaping-products-and-steady-decline-of-tobacco-cigarettes/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        className="image-container--image"
        sizes="(max-width: 767px) 96vw, (max-width: 991px) 350px, 500px"
        role="presentation"
        src="images/japan-tobacco-harm-reduction-1021x580-p-800.jpeg"
      />
    </a>
  );
};


export default LgCardImage;
