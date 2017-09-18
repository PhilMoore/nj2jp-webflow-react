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
    <div className="news-top-section">
      <a
        className="top-section w-inline-block"
        href="http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0"
        rel="noopener noreferrer"
        target="_blank"
      >
        <SplashImg />
        <HdrPage />
        <HdrAuthorImg />
      </a>
    </div>
  );
};


export default VapeNewsSplash;
