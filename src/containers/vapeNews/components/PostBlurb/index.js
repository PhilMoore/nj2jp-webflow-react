import React from 'react';

import { WebflowJs } from './assets/utils';

const PostBlurb = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <a
      className="blurb-container__blurb w-inline-block"
      href="http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0"
      rel="noopener noreferrer"
      target="_blank"
    >
      <p className="blurb--text">
        Competition to sate Japanese nicotine addicts is heating up.
      </p>
    </a>
  );
};


export default PostBlurb;
