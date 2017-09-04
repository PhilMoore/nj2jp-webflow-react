import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  SplashImg,
  HdrPage,
  HdrAuthorImg,
} from '../../components';

const VapeNewsSplash = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="news news__top-article">
      <div className="news__top-article w-container">
        <SplashImg />
        <HdrPage />
        <HdrAuthorImg />
      </div>
    </div>
  );
};


export default VapeNewsSplash;
