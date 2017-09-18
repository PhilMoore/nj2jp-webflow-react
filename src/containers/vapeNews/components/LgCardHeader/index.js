import React from 'react';

import { WebflowJs } from './assets/utils';

const LgCardHeader = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <a
      className="section-container__header w-inline-block"
      data-ix="fade-down-5"
      href="https://www.vapingpost.com/2016/08/30/japan-the-explosion-of-vaping-products-and-steady-decline-of-tobacco-cigarettes/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2 className="header--text text--duo">
        Japan : steady decline of tobacco cigarettes
      </h2>
    </a>
  );
};


export default LgCardHeader;
