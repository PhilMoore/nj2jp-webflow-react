import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  CardTitle,
  CardBlurb,
  CardMoreLink,
} from '../../components';

const CardBody = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="masonry-column__news news--content">
      <CardTitle
        header={props.CardBody.header}
      />
      <CardBlurb
        content={props.CardBody.content}
      />
      <CardMoreLink
        link={props.CardBody.link}
      />
    </div>
  );
};


export default CardBody;
