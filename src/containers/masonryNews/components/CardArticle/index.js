import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  CardImg,
  CardBody,
  CardTitle,
  CardBlurb,
  CardMoreLink,
}
from '../../components';

const CardArticle = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="masonry-column masonry-column__news">
      <CardImg
        src={props.CardImg.src}
      />
      <CardBody
        header={props.CardBody.header}
        content={props.CardBody.content}
        link={props.CardBody.link}
      >
        <div className="masonry-column__news news--content">
          <CardTitle
            header={props.CardTitle.header}
          />
          <CardBlurb
            content={props.CardBlurb.content}
          />
          <CardMoreLink
            link={props.CardMoreLink.link}
          />
        </div>
      </CardBody>
    </div>
  );
};

export default CardArticle;
