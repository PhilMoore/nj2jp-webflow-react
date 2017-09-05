import React from 'react';

import { propTypes } from './assets/propValidation';
import {
  WebflowJs,
} from './assets/utils';

import {
  VapeNewsSplash,
  VapeNewsSubSxn,
  PostListItem,
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
  renderHelper = data =>
  data.map((dataObj) => {
    if (dataObj.component === 'PostListItem') {
      return (
        <PostListItem
          {...dataObj.props}
          key={new Buffer(`${dataObj.props.containerInfo.href + Date.now()}`, 'utf8').toString('base64')}
        />
      );
    }
    return ('');
  })

  render() {
    const subSxnAuthor = [{


    }];
    const listItem = [{
      component: 'VapeNewsPost',
      props: {
        containerInfo: {
          href: 'http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0',
        },
        imageInfo: {
          sizes: '(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px',
          src: 'images/masonry2.png',
        },
        headerInfo: {
          href: 'http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0',
          header: 'Japan Tobacco playing catchup as nation takes to vaping in big way',
        },
        bodyInfo: {
          href: 'http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0',
          subHdr: 'Competition to sate Japanese nicotine addicts is heating up.',
        },
        authorInfo: {
          src: 'images/P1100442-150x150.jpg',
          width: '27',
          text: 'By Jérôme Harlay',
        },
      },
    }, {
      component: 'VapeNewsPost',
      props: {
        containerInfo: {
          href: 'http://www.japantimes.co.jp/news/2017/03/03/business/philip-morris-japan-tobacco-open-vape-stores-nationwide/#.WYBDva2Q3K2',
        },
        imageInfo: {
          sizes: '(max-width: 479px) 84vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px',
          src: 'images/masonry3.png',
          headerInfo: {
            href: 'http://www.japantimes.co.jp/news/2017/03/03/business/philip-morris-japan-tobacco-open-vape-stores-nationwide/#.WYBDva2Q3K2',
            header: 'Philip Morris, Japan Tobacco to open more vape stores nationwide',
          },
          bodyInfo: {
            href: 'http://www.japantimes.co.jp/news/2017/03/03/business/philip-morris-japan-tobacco-open-vape-stores-nationwide/#.WYBDva2Q3K2',
            subHdr: 'Philip Morris Japan Ltd. said Thursday that it will open a store in Tokyo’s Ginza district on Friday to sell its smokeless tobacco device iQOS',
          },
          authorInfo: {
            src: 'images/Screen-Shot-2017-07-03-at-15.08.41.png',
            width: '27',
            text: 'By Jiji Nakamura',
          },
        },
      },
    }, {
      component: 'VapeNewsPost',
      props: {
        containerInfo: {
          href: 'http://www.churnmag.com/news/absurdity-finest-new-war-vaping-goes-science/',
        },
        imageInfo: {
          sizes: '(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px',
          src: 'images/masonry8.png',
          headerInfo: {
            href: 'http://www.churnmag.com/news/absurdity-finest-new-war-vaping-goes-science/',
            header: 'The New War Against Vaping Goes Against Science',
          },
          bodyInfo: {
            href: 'http://www.churnmag.com/news/absurdity-finest-new-war-vaping-goes-science/',
            subHdr: 'Special interest groups are forcing personal beliefs against science, yet again.',
          },
          authorInfo: {
            src: 'images/164d5d493e2e59b4c01fac05c2aed910.jpeg',
            width: '27',
            text: 'By Jimmy Hafrey',
          },
        },
      },
    }, {
      component: 'VapeNewsPost',
      props: {
        containerInfo: {
          href: 'https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/',
        },
        imageInfo: {
          sizes: '(max-width: 479px) 83vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px',
          src: 'images/masonry5.png',
          headerInfo: {
            href: 'https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/',
            header: 'More data confirms that vaping is a safer alternative to smoking',
          },
          bodyInfo: {
            href: 'https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/',
            subHdr: 'A new study which found no evidence that vaping products may propagate cancer',
          },
          authorInfo: {
            src: 'images/P1100442-150x150.jpg',
            width: '27',
            text: 'By Jérôme Harlay',
          },
        },
      },
    }, {
      component: 'VapeNewsPost',
      props: {
        containerInfo: {
          href: 'http://www.vapingpost.com/2017/05/03/air-sampling-confirms-secondhand-vapor-is-harmless/',
        },
        imageInfo: {
          sizes: '(max-width: 479px) 89vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px',
          src: 'images/masonry1.png',
          headerInfo: {
            href: 'http://www.vapingpost.com/2017/05/03/air-sampling-confirms-secondhand-vapor-is-harmless/',
            header: 'Air Sampling confirms secondhand vapor is harmless',
          },
          bodyInfo: {
            href: 'http://www.vapingpost.com/2017/05/03/air-sampling-confirms-secondhand-vapor-is-harmless/',
            subHdr: 'The CDPH has been carrying out air sampling in vape shops',
          },
          authorInfo: {
            src: 'images/IMG_7048-1-150x150.jpg',
            width: '27',
            text: 'By Diane Caruana',
          },
        },
      },
    }, {
      component: 'VapeNewsPost',
      props: {
        containerInfo: {
          href: 'http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/',
        },
        imageInfo: {
          sizes: '(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px',
          src: 'images/masonry4.png',
          headerInfo: {
            href: 'http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/',
            header: 'PMI CEO talks about phasing out cigarettes in Japan &amp; S. Korea',
          },
          bodyInfo: {
            href: 'http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/',
            subHdr: 'PMI’s&nbsp;iQOS device, is a smokeless alternative to combustible cigarettes',
          },
          authorInfo: {
            src: 'images/IMG_7048-1-150x150.jpg',
            width: '27',
            text: 'By Diane Caruana',
          },
        },
      },
    }, {
      component: 'VapeNewsPost',
      props: {
        containerInfo: {
          href: 'https://www.vapingpost.com/2017/07/10/study-from-spain-confirms-effectivity-of-e-cigarettes/',
        },
        imageInfo: {
          sizes: '(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px',
          src: 'images/masonry9.png',
          headerInfo: {
            href: 'https://www.vapingpost.com/2017/07/10/study-from-spain-confirms-effectivity-of-e-cigarettes/',
            header: 'Study from Spain confirms effectivity of e-cigarettes',
          },
          bodyInfo: {
            href: 'https://www.vapingpost.com/2017/07/10/study-from-spain-confirms-effectivity-of-e-cigarettes/',
            subHdr: 'Recent data obtained from a Spanish study indicates that e-cigarettes are excellent harm reduction tools for smoking cessation.',
          },
          authorInfo: {
            src: 'images/IMG_7048-1-150x150.jpg',
            width: '27',
            text: 'By Diane Caruana',
          },
        },
      },
    }, {
      component: 'VapeNewsPost',
      props: {
        containerInfo: {
          href: 'http://www.churnmag.com/news/penn-st-study-vaping-cigarettes/',
        },
        imageInfo: {
          sizes: '(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px',
          src: 'images/masonry10.png',
          headerInfo: {
            href: 'http://www.churnmag.com/news/penn-st-study-vaping-cigarettes/',
            header: 'Shocking Penn State Study on Vaping and Cigarettes',
          },
          bodyInfo: {
            href: 'http://www.churnmag.com/news/penn-st-study-vaping-cigarettes/',
            subHdr: 'A new study out shows that people who use vape devices are less addicted to vaping than traditional smokers.',
          },
          authorInfo: {
            src: 'images/164d5d493e2e59b4c01fac05c2aed910.jpeg',
            width: '27',
            text: 'By Jimmy Hafrey',
          },
        },
      },
    }, {
      component: 'VapeNewsPost',
      props: {
        containerInfo: {
          href: 'http://www.churnmag.com/news/new-study-shows-vaping-less-harmful/',
        },
        imageInfo: {
          sizes: '(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px',
          src: 'images/masonry11.png',
          headerInfo: {
            href: 'http://www.churnmag.com/news/new-study-shows-vaping-less-harmful/',
            header: 'New Study Shows Vaping Less Harmful Again',
          },
          bodyInfo: {
            href: 'http://www.churnmag.com/news/new-study-shows-vaping-less-harmful/',
            subHdr: 'A study done by a Big Tobacco company has proven yet again that vaping is less harmful than smoking traditional cigarettes.',
          },
          authorInfo: {
            src: 'images/164d5d493e2e59b4c01fac05c2aed910.jpeg',
            width: '27',
            text: 'By Jimmy Hafrey',
          },
        },
      },
    }, {
      component: 'VapeNewsPost',
      props: {
        containerInfo: {
          href: 'https://www.vapingpost.com/2016/06/05/3-facts-smokers-should-know-about-vaping/',
        },
        imageInfo: {
          sizes: '(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px',
          src: 'images/masonry7.png',
          headerInfo: {
            href: 'https://www.vapingpost.com/2016/06/05/3-facts-smokers-should-know-about-vaping/',
            header: '3 facts smokers should know about vaping',
          },
          bodyInfo: {
            href: 'https://www.vapingpost.com/2016/06/05/3-facts-smokers-should-know-about-vaping/',
            subHdr: 'Just a few years ago electronic cigarettes were uncommon, hard to find and a mystery to most people. Now they’re everywhere – but, it turns out, they’re still a mystery to most people.',
          },
          authorInfo: {
            src: 'images/fergus-mason-vapingpost-journalist.jpg',
            width: '27',
            text: 'By Fergus Mason',
          },
        },
      },
    }, {
      component: 'VapeNewsPost',
      props: {
        containerInfo: {
          href: 'https://www.vapingpost.com/2017/07/16/michigan-us-smoking-on-decline-partly-thanks-to-e-cigs/',
        },
        imageInfo: {
          sizes: '(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px',
          src: 'images/masonry6.png',
          headerInfo: {
            href: 'https://www.vapingpost.com/2017/07/16/michigan-us-smoking-on-decline-partly-thanks-to-e-cigs/',
            header: 'Michigan US : Smoking on decline partly thanks to e-cigs',
          },
          bodyInfo: {
            href: 'https://www.vapingpost.com/2017/07/16/michigan-us-smoking-on-decline-partly-thanks-to-e-cigs/',
            subHdr: 'Both the number of smokers and the rates of lung cancer are on the decline, partly thanks to the advent of electronic cigarettes.',
          },
          authorInfo: {
            src: 'images/IMG_7048-1-150x150.jpg',
            width: '27',
            text: 'By Diane Caruana',
          },
        },
      },
    }];
    return (
      <div>
        <VapeNewsSplash />
        <VapeNewsSubSxn />
        {this.renderHelper(listItem)}
      </div>
    );
  }
}
export default VapeNews;
