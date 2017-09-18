import React from 'react';

import { WebflowJs } from './assets/utils';

const LrgCardHeader = (props) => {
  WebflowJs(); //eslint-disable-line
  const {
    containerInfo,
    contentInfo,
  } = props;

  return (
    <h2 className="dual-articles__heading w-clearfix" data-ix="fade-down-5">
      <a
        href={containerInfo.href}
        target="_blank"
        rel="noopener noreferrer"
        data-ix="fade-down-5"
        className="link-6"
      >
        {contentInfo.Hdr}
      </a>
    </h2>
  );
};

export default LrgCardHeader;
