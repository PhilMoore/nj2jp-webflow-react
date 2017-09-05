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

  render() {
    const listItem = [{
      component: 'VapeNewsPost',
      props: {
        containerInfo: {
          href: 'http://www.japantimes.co.jp/news/2016/08/31/national/japan-tobacco-playing-catchup-nation-takes-vaping-big-way/#.WW4eOsaQ3K0',
        },
        imageInfo: {
          sizes: '(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px',
          src: 'images/Screen-Shot-2017-07-18-at-21.42.05.png',
          srcSet: 'images/Screen-Shot-2017-07-18-at-21.42.05-p-500.png 500w, images/Screen-Shot-2017-07-18-at-21.42.05.png 774w',
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
          src: 'images/Screen-Shot-2017-07-18-at-21.47.36.png',
          srcSet: 'images/Screen-Shot-2017-07-18-at-21.47.36-p-500.png 500w, images/Screen-Shot-2017-07-18-at-21.47.36.png 704w',
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
          src: 'images/Screen-Shot-2017-08-05-at-16.34.57.png',
          srcSet: 'images/Screen-Shot-2017-08-05-at-16.34.57-p-500.png 500w, images/Screen-Shot-2017-08-05-at-16.34.57-p-800.png 800w, images/Screen-Shot-2017-08-05-at-16.34.57-p-1080.png 1080w, images/Screen-Shot-2017-08-05-at-16.34.57.png 1236w',
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
    },  {
      component: 'VapeNewsPost',
      props: {
        containerInfo: {
          href: 'https://www.vapingpost.com/2017/04/28/more-data-confirms-that-vaping-is-a-safer-alternative-to-smoking/',
        },
        imageInfo: {
          sizes: '(max-width: 479px) 83vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px',
          src: 'images/Screen-Shot-2017-07-17-at-14.00.26.png',
          srcSet: 'images/Screen-Shot-2017-07-17-at-14.00.26-p-500.png 500w, images/Screen-Shot-2017-07-17-at-14.00.26-p-800.png 800w, images/Screen-Shot-2017-07-17-at-14.00.26.png 974w',
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
          src: 'images/Screen-Shot-2017-07-16-at-21.58.42.png',
          srcSet: 'images/Screen-Shot-2017-07-16-at-21.58.42-p-500.png 500w, images/Screen-Shot-2017-07-16-at-21.58.42.png 662w',
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
    },{
      component: 'VapeNewsPost',
      props: {
        containerInfo: {
          href: 'http://www.vapingpost.com/2017/07/18/pmi-ceo-talks-about-phasing-out-cigarettes-in-japan-s-korea/',
        },
        imageInfo: {
          sizes: '(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px',
          src: 'images/Screen-Shot-2017-07-18-at-21.52.22.png',
          srcSet: 'images/Screen-Shot-2017-07-18-at-21.52.22-p-500.png 500w, images/Screen-Shot-2017-07-18-at-21.52.22.png 800w',
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
    },{
      component: 'VapeNewsPost',
      props: {
        containerInfo: {
          href: 'https://www.vapingpost.com/2017/07/10/study-from-spain-confirms-effectivity-of-e-cigarettes/',
        },
        imageInfo: {
          sizes: '(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px',
          src: 'images/Screen-Shot-2017-07-17-at-14.05.19.png',
          srcSet: 'images/Screen-Shot-2017-07-17-at-14.05.19-p-500.png 500w, images/Screen-Shot-2017-07-17-at-14.05.19-p-800.png 800w, images/Screen-Shot-2017-07-17-at-14.05.19.png 828w',
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
    },{
      component: 'VapeNewsPost',
      props: {
        containerInfo: {
          href: 'http://www.churnmag.com/news/penn-st-study-vaping-cigarettes/',
        },
        imageInfo: {
          sizes: '(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px',
          src: 'images/Screen-Shot-2017-07-18-at-18.45.16.png',
          srcSet: 'images/Screen-Shot-2017-07-18-at-18.45.16-p-500.png 500w, images/Screen-Shot-2017-07-18-at-18.45.16-p-800.png 800w, images/Screen-Shot-2017-07-18-at-18.45.16-p-1080.png 1080w, images/Screen-Shot-2017-07-18-at-18.45.16.png 1088w',
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
    },{
      component: 'VapeNewsPost',
      props: {
        containerInfo: {
          href: 'http://www.churnmag.com/news/new-study-shows-vaping-less-harmful/',
        },
        imageInfo: {
          sizes: '(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px',
          src: 'images/Screen-Shot-2017-07-18-at-18.49.34.png',
          srcSet: 'images/Screen-Shot-2017-07-18-at-18.49.34-p-500.png 500w, images/Screen-Shot-2017-07-18-at-18.49.34-p-800.png 800w, images/Screen-Shot-2017-07-18-at-18.49.34.png 926w',
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
    },{
      component: 'VapeNewsPost',
      props: {
        containerInfo: {
          href: 'https://www.vapingpost.com/2016/06/05/3-facts-smokers-should-know-about-vaping/',
        },
        imageInfo: {
          sizes: '(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px',
          src: 'images/Screen-Shot-2017-07-17-at-13.45.14.png',
          srcSet: 'images/Screen-Shot-2017-07-17-at-13.45.14-p-500.png 500w, images/Screen-Shot-2017-07-17-at-13.45.14-p-800.png 800w, images/Screen-Shot-2017-07-17-at-13.45.14-p-1080.png 1080w, images/Screen-Shot-2017-07-17-at-13.45.14.png 1126w',
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
    },{
      component: 'VapeNewsPost',
      props: {
        containerInfo: {
          href: 'https://www.vapingpost.com/2017/07/16/michigan-us-smoking-on-decline-partly-thanks-to-e-cigs/',
        },
        imageInfo: {
          sizes: '(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px',
          src: 'images/Screen-Shot-2017-07-17-at-13.42.40.png',
          srcSet: 'images/Screen-Shot-2017-07-17-at-13.42.40-p-500.png 500w, images/Screen-Shot-2017-07-17-at-13.42.40.png 680w',
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
    },{
      component: 'VapeNewsPost',
      props: {
        containerInfo: {
          href: 'https://www.vapingpost.com/2017/07/16/michigan-us-smoking-on-decline-partly-thanks-to-e-cigs/',
        },
        imageInfo: {
          sizes: '(max-width: 479px) 80vw, (max-width: 767px) 27vw, (max-width: 991px) 181.578125px, 200.8125px',
          src: 'images/Screen-Shot-2017-07-17-at-13.42.40.png',
          srcSet: 'images/Screen-Shot-2017-07-17-at-13.42.40-p-500.png 500w, images/Screen-Shot-2017-07-17-at-13.42.40.png 680w',
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
    }, ];
  return (
    <div>
      <VapeNewsSplash />
      <VapeNewsSubSxn />
      <PostListItem />
    </div>
  );
};

export default VapeNews;
