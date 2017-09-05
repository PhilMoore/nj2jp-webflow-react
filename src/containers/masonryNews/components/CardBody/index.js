import React from 'react';

import { WebflowJs } from './assets/utils';

const CardBody = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="masonry-column__news news--content">
      {props.children}
    </div>
  );
};


export default CardBody;
