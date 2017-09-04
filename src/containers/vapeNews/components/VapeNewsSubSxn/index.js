import React from 'react';

import { WebflowJs } from './assets/utils';

const VapeNewsSubSxn = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="news news__dual-articles">
      <div className="news__dual-articles w-container">
        <div className="dual-articles--left-article news__dual-articles">
          <a className="w-inline-block" href="https://www.vapingpost.com/2016/08/30/japan-the-explosion-of-vaping-products-and-steady-decline-of-tobacco-cigarettes/" rel="noopener noreferrer" target="_blank">
            <img className="left-article__image" role="presentation" data-ix="fade-down-4" sizes="(max-width: 479px) 100vw, (max-width: 767px) 48vw, (max-width: 991px) 349.4375px, 449px" src="images/japan-tobacco-harm-reduction-1021x580.jpg" srcSet="images/japan-tobacco-harm-reduction-1021x580-p-500.jpeg 500w, images/japan-tobacco-harm-reduction-1021x580-p-800.jpeg 800w, images/japan-tobacco-harm-reduction-1021x580.jpg 1021w" />
          </a>
          <h2 className="dual-articles__heading w-clearfix" data-ix="fade-down-5">
            <a href="https://www.vapingpost.com/2016/08/30/japan-the-explosion-of-vaping-products-and-steady-decline-of-tobacco-cigarettes/" rel="noopener noreferrer" target="_blank" data-ix="fade-down-5" className="link-6">Japan : steady decline of tobacco cigarettes
            </a>
          </h2>
          <div className="dual-articles__author" data-ix="fade-down-6">
            <img className="author__image" role="presentation" src="images/IMG_7048-1-150x150.jpg" width="31" />
            <p className="author__text">By Diane Caruana
            </p>
          </div>
        </div>
        <div className="dual-articles--right-article news__dual-articles">
          <a className="w-inline-block" href="https://www.vapingpost.com/2017/03/21/10-scientific-facts-about-vaping-a-vaper-should-know/" rel="noopener noreferrer" target="_blank">
            <img className="right-article__image" role="presentation" data-ix="fade-down-4" sizes="(max-width: 479px) 100vw, (max-width: 767px) 48vw, (max-width: 991px) 349.4375px, 451.1875px" src="images/magnifying-glass-1607160_1920.jpg" srcSet="images/magnifying-glass-1607160_1920-p-500.jpeg 500w, images/magnifying-glass-1607160_1920-p-1080.jpeg 1080w, images/magnifying-glass-1607160_1920-p-1600.jpeg 1600w, images/magnifying-glass-1607160_1920.jpg 1920w" />
          </a>
          <h2 className="dual-articles__heading w-clearfix" data-ix="fade-down-5">
            <a href="https://www.vapingpost.com/2017/03/21/10-scientific-facts-about-vaping-a-vaper-should-know/" rel="noopener noreferrer" target="_blank" data-ix="fade-down-5" className="link-7">10 scientific facts about vaping a vaper should know
            </a>
          </h2>
          <div className="dual-articles__author" data-ix="fade-down-6">
            <img className="author__image" role="presentation" src="images/P1100442-150x150.jpg" width="27" />
            <p className="author__text">By Jérôme Harlay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default VapeNewsSubSxn;
