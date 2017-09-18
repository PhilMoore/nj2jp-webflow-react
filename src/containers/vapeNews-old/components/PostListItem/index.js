import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  PostImgSqr,
  PostBody,
} from '../../components';

const PostListItem = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="news news__main-feed" data-ix="pop-in">
      <div className="news__main-feed w-container">
        <PostImgSqr />
        <PostBody />
      </div>
    </div>
  );
};


export default PostListItem;
