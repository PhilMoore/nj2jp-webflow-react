import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  SubSxnCard,
} from '../../components';

const VapeNewsSubSxn = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="news-dual-articles">
      <SubSxnCard />
      <div className="dual-articles__section-container">
        <a
          className="section-container__image-container w-inline-block"
          data-ix="fade-down-4"
          href="https://www.vapingpost.com/2017/03/21/10-scientific-facts-about-vaping-a-vaper-should-know/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="image-container--image"
            role="presentation"
            src="images/magnifying-glass-1607160_1920-p-500.jpeg"
          />
        </a>
        <a
          className="section-container__header w-inline-block"
          data-ix="fade-down-5"
          href="https://www.vapingpost.com/2017/03/21/10-scientific-facts-about-vaping-a-vaper-should-know/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2 className="header--text text--duo">
            10 scientific facts about vaping a vaper should know
          </h2>
        </a>
        <div className="section-container__author" data-ix="fade-down-5">
          <div className="author__image-container">
            <img
              className="top-section"
              role="presentation"
              src="images/P1100442-150x150.jpg"
            />
          </div>
          <div className="author__text-container">
            <p className="text-container--blurb" data-ix="fade-down-6">
              By Jérôme Harlay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default VapeNewsSubSxn;
