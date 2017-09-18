import React from 'react';

import { WebflowJs } from './assets/utils';

const PostImgSqr = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <a
      className="article__image-container w-inline-block"
      href="http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        className="image-container--feed-image"
        role="presentation"
        src="images/masonry2.png"
      />
    </a>
  );
};


export default PostImgSqr;
