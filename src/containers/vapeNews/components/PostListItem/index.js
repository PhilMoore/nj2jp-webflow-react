import React from 'react';

import { WebflowJs } from './assets/utils';

const PostListItem = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="news news__main-feed" data-ix="pop-in">
      <div className="news__main-feed w-container">
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
        <div className="main-feed--content news__main-feed">
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
          <div className="dual-articles__author">
            <img
              className="author__image"
              role="presentation"
              src="images/P1100442-150x150.jpg"
              width="27"
            />
            <p className="author__text">
              By Jérôme Harlay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PostListItem;
