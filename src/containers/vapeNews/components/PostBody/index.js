import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  PostHdrTitle,
  PostBlurb,
  PostAuthor,
} from '../../components';

const PostBody = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="article__blurb-container">
      <PostHdrTitle />
      <PostBlurb />
      <PostAuthor />
    </div>
  );
};


export default PostBody;
