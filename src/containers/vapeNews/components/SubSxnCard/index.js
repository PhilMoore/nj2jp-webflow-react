import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  LgCardImage,
  LgCardHeader,
  LgCardAuthor,
} from '../../components';

const SubSxnCard = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="dual-articles__section-container">
      <LgCardImage />
      <LgCardHeader />
      <LgCardAuthor />
    </div>
  );
};


export default SubSxnCard;
