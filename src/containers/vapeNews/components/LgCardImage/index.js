import React from 'react';

import { WebflowJs } from './assets/utils';

const LgCardImage = (props) => {
  WebflowJs(); //eslint-disable-line
  const {
    containerInfo,
    imgInfo,
  } = props;

  return (
    <a
      className={containerInfo.className}
      href={containerInfo.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        className={imgInfo.className}
        role="presentation"
        data-ix="fade-down-4"
        sizes={imgInfo.sizes}
        src={imgInfo.src}
        srcSet={imgInfo.srcSet}
      />
    </a>
  );
};

export default LgCardImage;
