import React from 'react';

import { WebflowJs } from './assets/utils';

const PostBlurb = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <p className="content--text main-feed__content">
      <a
        href="http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0"
        rel="noopener noreferrer"
        target="_blank"
        className="news-mainfeed__article-content-link"
      >
        Competition to sate Japanese nicotine addicts is heating up.
      </a>
    </p>
  );
};


export default PostBlurb;
