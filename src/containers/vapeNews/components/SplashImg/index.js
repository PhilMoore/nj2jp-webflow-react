import React from 'react';

import { WebflowJs } from './assets/utils';

const SplashImg = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="top-section__image-container">
      <img
        className="image-container--img"
        data-ix="fade-down-2"
        sizes="(max-width: 767px) 100vw, (max-width: 991px) 768px, (max-width: 1021px) 100vw, 1021px"
        role="presentation"
        src="images/japan-1902834_1280-1021x580.jpg"
        srcSet="images/japan-1902834_1280-1021x580-p-500.jpeg 500w, images/japan-1902834_1280-1021x580-p-800.jpeg 800w, images/japan-1902834_1280-1021x580.jpg 1021w"
      />
    </div>
  );
};


export default SplashImg;
