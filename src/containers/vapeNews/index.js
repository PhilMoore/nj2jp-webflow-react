import React from 'react';

import { propTypes } from './assets/propValidation';
import {
  WebflowJs,
} from './assets/utils';

import {
  VapeNewsSplash,
  VapeNewsSubSxn,
} from './components';

class VapeNews extends React.Component {
  static propTypes = propTypes

  constructor(props) {
    super(props);

    this.state = {
      x: '',
    };
  }

  componentDidMount() {
    WebflowJs(); // eslint-disable-line
  }

  render() {
    const listItem = [{
      component: 'VapeNewsPost',
      props: {
        imageInfo: {
          href: 'http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0',
          src: 'images/masonry2.png',
        },
        headerInfo: {
          href: 'http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0',
          header: 'Japan Tobacco playing catchup as nation takes to vaping in big way',
        },
        blurbText: {
          href: 'http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0',
          subHdr: 'Competition to sate Japanese nicotine addicts is heating up.',
        },
        authorInfo: {
          src: 'images/P1100442-150x150.jpg',
          text: 'By Jérôme Harlay',
        },
      },
    }, {
      component: 'VapeNewsPost',
      props: {
        imageInfo: {
          href: 'http://www.japantimes.co.jp/news/2017/03/03/business/philip-morris-japan-tobacco-open-vape-stores-nationwide/#.WYBDva2Q3K2',
          src: 'images/masonry3.png',
        },
        headerInfo: {
          href: 'http://www.japantimes.co.jp/news/2017/03/03/business/philip-morris-japan-tobacco-open-vape-stores-nationwide/#.WYBDva2Q3K2',
          header: 'Philip Morris, Japan Tobacco to open more vape stores nationwide',
        },
        blurbText: {
          href: 'http://www.japantimes.co.jp/news/2017/03/03/business/philip-morris-japan-tobacco-open-vape-stores-nationwide/#.WYBDva2Q3K2',
          subHdr: 'Philip Morris Japan Ltd. said Thursday that it will open a store in Tokyo’s Ginza district on Friday to sell its smokeless tobacco device iQOS',
        },
        authorInfo: {
          src: 'images/Screen-Shot-2017-07-03-at-15.08.41.png',
          text: 'By Jiji Nakamura',
        },
      },
    }, {
      component: 'VapeNewsPost',
      props: {
        imageInfo: {
          href: 'http://www.churnmag.com/news/absurdity-finest-new-war-vaping-goes-science/',
          src: 'images/masonry8.png',
        },
        headerInfo: {
          href: 'http://www.churnmag.com/news/absurdity-finest-new-war-vaping-goes-science/',
          header: 'The New War Against Vaping Goes Against Science',
        },
        blurbText: {
          href: 'http://www.churnmag.com/news/absurdity-finest-new-war-vaping-goes-science/',
          subHdr: 'Special interest groups are forcing personal beliefs against science, yet again.',
        },
        authorInfo: {
          src: 'images/164d5d493e2e59b4c01fac05c2aed910.jpeg',
          text: 'By Jimmy Hafrey',
        },
      },
    }, {
      component: 'VapeNewsPost',
      props: {
        imageInfo: {
          href: 'https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/',
          src: 'images/masonry5.png',
        },
        headerInfo: {
          href: 'https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/',
          header: 'More data confirms that vaping is a safer alternative to smoking',
        },
        blurbText: {
          href: 'https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/',
          subHdr: 'A new study which found no evidence that vaping products may propagate cancer',
        },
        authorInfo: {
          src: 'images/P1100442-150x150.jpg',
          text: 'By Jérôme Harlay',
        },
      },
    }, {
      component: 'VapeNewsPost',
      props: {
        imageInfo: {
          href: 'http://www.vapingpost.com/2017/05/03/air-sampling-confirms-secondhand-vapor-is-harmless/',
          src: 'images/masonry1.png',
        },
        headerInfo: {
          href: 'http://www.vapingpost.com/2017/05/03/air-sampling-confirms-secondhand-vapor-is-harmless/',
          header: 'Air Sampling confirms secondhand vapor is harmless',
        },
        blurbText: {
          href: 'http://www.vapingpost.com/2017/05/03/air-sampling-confirms-secondhand-vapor-is-harmless/',
          subHdr: 'The CDPH has been carrying out air sampling in vape shops',
        },
        authorInfo: {
          src: 'images/IMG_7048-1-150x150.jpg',
          text: 'By Diane Caruana',
        },
      },
    }, {
      component: 'VapeNewsPost',
      props: {
        imageInfo: {
          href: 'http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/',
          src: 'images/masonry4.png',
        },
        headerInfo: {
          href: 'http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/',
          header: 'PMI CEO talks about phasing out cigarettes in Japan &amp; S. Korea',
        },
        blurbText: {
          href: 'http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/',
          subHdr: 'PMI’s&nbsp;iQOS device, is a smokeless alternative to combustible cigarettes',
        },
        authorInfo: {
          src: 'images/IMG_7048-1-150x150.jpg',
          text: 'By Diane Caruana',
        },
      },
    }, {
      component: 'VapeNewsPost',
      props: {
        imageInfo: {
          href: 'https://www.vapingpost.com/2017/07/10/study-from-spain-confirms-effectivity-of-e-cigarettes/',
          src: 'images/masonry9.png',
        },
        headerInfo: {
          href: 'https://www.vapingpost.com/2017/07/10/study-from-spain-confirms-effectivity-of-e-cigarettes/',
          header: 'Study from Spain confirms effectivity of e-cigarettes',
        },
        blurbText: {
          href: 'https://www.vapingpost.com/2017/07/10/study-from-spain-confirms-effectivity-of-e-cigarettes/',
          subHdr: 'Recent data obtained from a Spanish study indicates that e-cigarettes are excellent harm reduction tools for smoking cessation.',
        },
        authorInfo: {
          src: 'images/IMG_7048-1-150x150.jpg',
          text: 'By Diane Caruana',
        },
      },
    }, {
      component: 'VapeNewsPost',
      props: {
        imageInfo: {
          href: 'http://www.churnmag.com/news/penn-st-study-vaping-cigarettes/',
          src: 'images/masonry9.png',
        },
        headerInfo: {
          href: 'http://www.churnmag.com/news/penn-st-study-vaping-cigarettes/',
          header: 'Shocking Penn State Study on Vaping and Cigarettes',
        },
        blurbText: {
          href: 'http://www.churnmag.com/news/penn-st-study-vaping-cigarettes/',
          subHdr: 'A new study out shows that people who use vape devices are less addicted to vaping than traditional smokers.',
        },
        authorInfo: {
          src: 'images/164d5d493e2e59b4c01fac05c2aed910.jpeg',
          text: 'By Jimmy Hafrey',
        },
      },
    }, {
      component: 'VapeNewsPost',
      props: {
        imageInfo: {
          href: 'http://www.churnmag.com/news/new-study-shows-vaping-less-harmful/',
          src: 'images/masonry11.png',
        },
        headerInfo: {
          href: 'http://www.churnmag.com/news/new-study-shows-vaping-less-harmful/',
          header: 'New Study Shows Vaping Less Harmful Again',
        },
        blurbText: {
          href: 'http://www.churnmag.com/news/new-study-shows-vaping-less-harmful/',
          subHdr: 'A study done by a Big Tobacco company has proven yet again that vaping is less harmful than smoking traditional cigarettes.',
        },
        authorInfo: {
          src: 'images/164d5d493e2e59b4c01fac05c2aed910.jpeg',
          text: 'By Jimmy Hafrey',
        },
      },
    }, {
      component: 'VapeNewsPost',
      props: {
        imageInfo: {
          href: 'https://www.vapingpost.com/2016/06/05/3-facts-smokers-should-know-about-vaping/',
          src: 'images/masonry7.png',
        },
        headerInfo: {
          href: 'https://www.vapingpost.com/2016/06/05/3-facts-smokers-should-know-about-vaping/',
          header: '3 facts smokers should know about vaping',
        },
        blurbText: {
          href: 'https://www.vapingpost.com/2016/06/05/3-facts-smokers-should-know-about-vaping/',
          subHdr: 'Just a few years ago electronic cigarettes were uncommon, hard to find and a mystery to most people. Now they’re everywhere – but, it turns out, they’re still a mystery to most people.',
        },
        authorInfo: {
          src: 'images/fergus-mason-vapingpost-journalist.jpg',
          text: 'By Fergus Mason',
        },
      },
    }, {
      component: 'VapeNewsPost',
      props: {
        imageInfo: {
          href: 'https://www.vapingpost.com/2017/07/16/michigan-us-smoking-on-decline-partly-thanks-to-e-cigs/',
          src: 'images/masonry6.png',
        },
        headerInfo: {
          href: 'https://www.vapingpost.com/2017/07/16/michigan-us-smoking-on-decline-partly-thanks-to-e-cigs/',
          header: 'Michigan US : Smoking on decline partly thanks to e-cigs',
        },
        blurbText: {
          href: 'https://www.vapingpost.com/2017/07/16/michigan-us-smoking-on-decline-partly-thanks-to-e-cigs/',
          subHdr: 'Both the number of smokers and the rates of lung cancer are on the decline, partly thanks to the advent of electronic cigarettes.',
        },
        authorInfo: {
          src: 'images/IMG_7048-1-150x150.jpg',
          text: 'By Diane Caruana',
        },
      },
    }];
    return (
      <div className="vape-news">
        <VapeNewsSplash />
        <VapeNewsSubSxn />
        <div className="news-feed">
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="image-container--feed-image"
                role="presentation"
                src="images/masonry2.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="header--text">
                  Japan Tobacco playing catchup as nation takes to vaping in big way
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  Competition to sate Japanese nicotine addicts is heating up.
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img
                    className="container--img"
                    role="presentation"
                    src="images/P1100442-150x150.jpg"
                  />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">
                    By Jérôme Harlay
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="http://www.japantimes.co.jp/news/2017/03/03/business/philip-morris-japan-tobacco-open-vape-stores-nationwide/#.WYBDva2Q3K2"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="image-container--feed-image"
                role="presentation"
                src="images/Masonry3.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="http://www.japantimes.co.jp/news/2017/03/03/business/philip-morris-japan-tobacco-open-vape-stores-nationwide/#.WYBDva2Q3K2"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="header--text">
                  Philip Morris, Japan Tobacco to open more vape stores nationwide
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="http://www.japantimes.co.jp/news/2017/03/03/business/philip-morris-japan-tobacco-open-vape-stores-nationwide/#.WYBDva2Q3K2"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  Philip Morris Japan Ltd. said Thursday that it will open a store in Tokyo’s Ginza district on Friday to sell its smokeless tobacco device iQOS
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img
                    className="container--img"
                    role="presentation"
                    src="images/595d050cdf246873326fcc1e_Screen-Shot-2017-07-03-at-15.08.41.png"
                  />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">
                    By Jiji Nakamura
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="image-container--feed-image"
                role="presentation"
                src="images/masonry8.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="header--text">
                  The New War Against Vaping Goes Against Science
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  Special interest groups are forcing personal beliefs against science, yet again.
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img
                    className="container--img"
                    role="presentation"
                    src="images/164d5d493e2e59b4c01fac05c2aed910.jpeg"
                  />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">
                    By Jimmy Hafrey
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="image-container--feed-image"
                role="presentation"
                src="images/masonry5.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="header--text">
                  More data confirms that vaping is a safer alternative to smoking
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  A new study which found no evidence that vaping products may propagate cancer.
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img
                    className="container--img"
                    role="presentation"
                    src="images/P1100442-150x150.jpg"
                  />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">
                    By Jérôme Harlay
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="image-container--feed-image"
                role="presentation"
                src="images/masonry1.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/"
              >
                <h2 className="header--text">
                  Air Sampling confirms secondhand vapor is harmless
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  The CDPH has been carrying out air sampling in vape shops
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img
                    className="container--img"
                    role="presentation"
                    src="images/IMG_7048-1-150x150.jpg"
                  />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">By Diane Caruana</p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="image-container--feed-image"
                role="presentation"
                src="images/masonry4.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="header--text">
                  PMI CEO talks about phasing out cigarettes in Japan &amp; S. Korea
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  PMI’s&nbsp;iQOS device, is a smokeless alternative to combustible cigarettes
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img
                    className="container--img"
                    role="presentation"
                    src="images/IMG_7048-1-150x150.jpg"
                  />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">
                    By Diane Caruana
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="https://www.vapingpost.com/2017/07/10/study-from-spain-confirms-effectivity-of-e-cigarettes/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="image-container--feed-image"
                role="presentation"
                src="images/masonry9.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="https://www.vapingpost.com/2017/07/10/study-from-spain-confirms-effectivity-of-e-cigarettes/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="header--text">
                  Study from Spain confirms effectivity of e-cigarettes
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="https://www.vapingpost.com/2017/07/10/study-from-spain-confirms-effectivity-of-e-cigarettes/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  Recent data obtained from a Spanish study indicates that e-cigarettes are excellent harm reduction tools for smoking cessation.
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img
                    className="container--img"
                    role="presentation"
                    src="images/IMG_7048-1-150x150.jpg"
                  />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">
                    By Diane Caruana
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="http://www.churnmag.com/news/penn-st-study-vaping-cigarettes/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="image-container--feed-image"
                role="presentation"
                src="images/masonry10.2.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="http://www.churnmag.com/news/penn-st-study-vaping-cigarettes/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="header--text">
                  Shocking Penn State Study on Vaping and Cigarettes
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="http://www.churnmag.com/news/penn-st-study-vaping-cigarettes/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  A new study out shows that people who use vape devices are less addicted to vaping than traditional smokers.
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img
                    className="container--img"
                    role="presentation"
                    src="images/164d5d493e2e59b4c01fac05c2aed910.jpeg"
                  />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">By Jimmy Hafrey</p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="http://www.churnmag.com/news/new-study-shows-vaping-less-harmful/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="image-container--feed-image"
                role="presentation"
                src="images/masonry11.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="http://www.churnmag.com/news/new-study-shows-vaping-less-harmful/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="header--text">
                  New Study Shows Vaping Less Harmful Again
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="http://www.churnmag.com/news/new-study-shows-vaping-less-harmful/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  A study done by a Big Tobacco company has proven yet again that vaping is less harmful than smoking traditional cigarettes.
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img
                    className="container--img"
                    role="presentation"
                    src="images/164d5d493e2e59b4c01fac05c2aed910.jpeg"
                  />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">
                    By Jimmy Hafrey
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="https://www.vapingpost.com/2016/06/05/3-facts-smokers-should-know-about-vaping/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="image-container--feed-image"
                role="presentation"
                src="images/masonry7.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="https://www.vapingpost.com/2016/06/05/3-facts-smokers-should-know-about-vaping/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="header--text">3 facts smokers should know about vaping</h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="https://www.vapingpost.com/2016/06/05/3-facts-smokers-should-know-about-vaping/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">Just a few years ago electronic cigarettes were uncommon, hard to find and a mystery to most people. Now they’re everywhere – but, it turns out, they’re still a mystery to most people.</p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img
                    className="container--img"
                    role="presentation"
                    src="images/fergus-mason-vapingpost-journalist.jpg"
                  />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">
                    By Fergus Mason
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="news-feed__article" data-ix="pop-in">
            <a
              className="article__image-container w-inline-block"
              href="https://www.vapingpost.com/2017/07/16/michigan-us-smoking-on-decline-partly-thanks-to-e-cigs/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="image-container--feed-image"
                role="presentation"
                src="images/masonry6.png"
              />
            </a>
            <div className="article__blurb-container">
              <a
                className="blurb-container__header w-inline-block"
                href="https://www.vapingpost.com/2017/07/16/michigan-us-smoking-on-decline-partly-thanks-to-e-cigs/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="header--text">
                  Michigan US : Smoking on decline partly thanks to e-cigs
                </h2>
              </a>
              <a
                className="blurb-container__blurb w-inline-block"
                href="https://www.vapingpost.com/2017/07/16/michigan-us-smoking-on-decline-partly-thanks-to-e-cigs/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="blurb--text">
                  Both the number of smokers and the rates of lung cancer are on the decline, partly thanks to the advent of electronic cigarettes.
                </p>
              </a>
              <div className="blurb-container__author-info">
                <div className="author-info__author-img--container">
                  <img className="container--img" role="presentation" src="images/IMG_7048-1-150x150.jpg" />
                </div>
                <div className="author-info__author-text--container">
                  <p className="text-container--blurb">
                    By Diane Caruana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VapeNews;
