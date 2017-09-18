import React from 'react';

import { WebflowJs } from './assets/utils';

const HdrAuthorImg = (props) => {
  WebflowJs(); //eslint-disable-line
  const {
    imgInfo,
    contentInfo,
  } = props;

  return (
    <div className="dual-articles__author" data-ix="fade-down-6">
      <img
        className="author__image"
        role="presentation"
        src={imgInfo.src}
        width={imgInfo.width}
      />
      <p className="author__text">{contentInfo.authorText}
      </p>
    </div>
  );
};


export default HdrAuthorImg;
