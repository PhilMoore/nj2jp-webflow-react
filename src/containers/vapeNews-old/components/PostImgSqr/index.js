import React from 'react';

import { WebflowJs } from './assets/utils';

const PostImgSqr = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <a
      className="link-block w-inline-block"
      href="http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        className="news__image"
        role="presentation"
        sizes="(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px"
        src="images/Screen-Shot-2017-07-18-at-21.42.05.png"
        srcSet="images/Screen-Shot-2017-07-18-at-21.42.05-p-500.png 500w, images/Screen-Shot-2017-07-18-at-21.42.05.png 774w"
      />
    </a>
  );
};


export default PostImgSqr;
