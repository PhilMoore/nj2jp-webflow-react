import React from 'react';

import { WebflowJs } from './assets/utils';

import {
  SubSxnCard,
} from '../../components';

const VapeNewsSubSxn = () => {
  WebflowJs(); //eslint-disable-line

  const CardInfo = [{
    component: 'SubSxnCard',
    props: {
      LgCardImage: {
        href: 'https://www.vapingpost.com/2017/03/21/10-scientific-facts-about-vaping-a-vaper-should-know/',
        src: 'images/magnifying-glass-1607160_1920-p-500.jpeg',
      },
      LgCardHeader: {
        href: 'https://www.vapingpost.com/2017/03/21/10-scientific-facts-about-vaping-a-vaper-should-know/',
        header: '10 scientific facts about vaping a vaper should know',
      },
      LgCardAuthor: {
        src: 'images/P1100442-150x150.jpg',
        text: 'By Jérôme Harlay',
      },
    },
  }, {
    component: 'SubSxnCard',
    props: {
      LgCardImage: {
        href: 'https://www.vapingpost.com/2016/08/30/japan-the-explosion-of-vaping-products-and-steady-decline-of-tobacco-cigarettes/',
        src: 'images/japan-tobacco-harm-reduction-1021x580-p-800.jpeg',
      },
      LgCardHeader: {
        href: 'https://www.vapingpost.com/2016/08/30/japan-the-explosion-of-vaping-products-and-steady-decline-of-tobacco-cigarettes/',
        header: 'Japan : steady decline of tobacco cigarettes',
      },
      LgCardAuthor: {
        src: 'images/IMG_7048-1-150x150.jpg',
        text: 'By Diane Caruana',
      },
    },
  }];
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
