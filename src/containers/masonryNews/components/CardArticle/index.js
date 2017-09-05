import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  CardImg,
  CardBody,
} from '../../components';

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
      />
    </div>
  );
};


export default CardArticle;
