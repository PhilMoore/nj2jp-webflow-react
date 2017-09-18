import React from 'react';

import { WebflowJs } from './assets/utils';

import {
PostImgSqr,
PostBody,
} from '../../components';

const PostListItem = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="news-feed__article" data-ix="pop-in">
      <PostImgSqr />
      <PostBody />
    </div>
  );
};


export default PostListItem;
