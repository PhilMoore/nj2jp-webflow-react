import React from 'react';

import { WebflowJs } from './assets/utils';

const PostHdrTitle = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <h2 className="content--heading main-feed__content">
      <a
        href="http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0"
        rel="noopener noreferrer"
        target="_blank"
        className="news-main-feed__article-header-link"
      >
        Japan Tobacco playing catchup as nation takes to vaping in big way
      </a>
    </h2>
  );
};


export default PostHdrTitle;
