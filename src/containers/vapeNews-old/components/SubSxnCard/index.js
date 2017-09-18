import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  LgCardImage,
  LgCardHeader,
  HdrAuthorImg,
} from '../../components';

const SubSxnCard = (props) => {
  WebflowJs(); //eslint-disable-line
  console.log('asdfasdf: ', props);
  return (
    <div className={`dual-articles--${props.orientation}-article news__dual-articles`}>
      <LgCardImage
        containerInfo={props.LgCardImage.containerInfo}
        imgInfo={props.LgCardImage.imgInfo}
      />
      <LgCardHeader
        containerInfo={props.LgCardHeader.containerInfo}
        contentInfo={props.LgCardHeader.contentInfo}
      />
      <HdrAuthorImg
        imgInfo={props.HdrAuthorImg.imgInfo}
        contentInfo={props.HdrAuthorImg.contentInfo}
      />
    </div>
  );
};

export default SubSxnCard;
