import React from 'react';

import { WebflowJs } from './assets/utils';

const PostHdrTitle = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <a
      className="blurb-container__header w-inline-block"
      href="http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0"
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2 className="header--text">
        Japan Tobacco playing catchup as nation takes to vaping in big way
      </h2>
    </a>
  );
};


export default PostHdrTitle;
