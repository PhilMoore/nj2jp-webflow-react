import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  PostHdrTitle,
  PostBlurb,
} from '../../components';

const PostBody = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="main-feed--content news__main-feed">
      <PostHdrTitle />
      <PostBlurb />
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
  );
};


export default PostBody;
