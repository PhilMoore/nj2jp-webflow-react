import React from 'react';

import { WebflowJs } from './assets/utils';

const SplashImg = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <a className="w-inline-block" href="https://www.vapingpost.com/2017/01/24/japan-the-fear-of-secondhand-smoke-to-propagate-to-heat-not-burn-cigarettes/" rel="noopener noreferrer" target="_blank">
      <img className="news__top-article top-article--image" role="presentation" data-ix="fade-down" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" src="images/japan-1902834_1280-1021x580.jpg" srcSet="images/japan-1902834_1280-1021x580-p-500.jpeg 500w, images/japan-1902834_1280-1021x580-p-800.jpeg 800w, images/japan-1902834_1280-1021x580.jpg 1021w" />
    </a>
  );
};


export default SplashImg;
