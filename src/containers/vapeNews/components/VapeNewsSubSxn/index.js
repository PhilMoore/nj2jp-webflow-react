import React from 'react';
import { propTypes } from './assets/propValidation';
import { WebflowJs } from './assets/utils';

import {
  SubSxnCard,
} from '../../components';

class VapeNewsSubSxn extends React.Component {
  static propTypes = propTypes

  constructor(props) {
    super(props);
    console.log('props: ', props);
    this.state = {
      x: '',
    };
  }

  componentDidMount() {
    // WebflowJs(); // eslint-disable-line
  }

  renderHelper = data =>
  data.map(dataObj => (
    <SubSxnCard
      {...dataObj}
      key={new Buffer(`${dataObj.orientation + Date.now()}`, 'utf8').toString('base64')}
    />
  ))

  render() {
    const SubSxnCardData = [{
      orientation: 'left',
      LgCardImage: {
        containerInfo: {
          className: 'w-inline-block',
          href: 'https://www.vapingpost.com/2016/08/30/japan-the-explosion-of-vaping-products-and-steady-decline-of-tobacco-cigarettes/',
        },
        imgInfo: {
          className: 'left-article__image',
          sizes: '(max-width: 479px) 100vw, (max-width: 767px) 48vw, (max-width: 991px) 349.4375px, 449px',
          src: 'images/japan-tobacco-harm-reduction-1021x580.jpg',
          srcSet: 'images/japan-tobacco-harm-reduction-1021x580-p-500.jpeg 500w, images/japan-tobacco-harm-reduction-1021x580-p-800.jpeg 800w, images/japan-tobacco-harm-reduction-1021x580.jpg 1021w',
        },
      },
      LgCardHeader: {
        containerInfo: {
          href: 'https://www.vapingpost.com/2016/08/30/japan-the-explosion-of-vaping-products-and-steady-decline-of-tobacco-cigarettes/',
        },
        contentInfo: {
          Hdr: 'Japan : steady decline of tobacco cigarettes',
        },
      },
      HdrAuthorImg: {
        imgInfo: {
          src: 'images/IMG_7048-1-150x150.jpg',
          width: '31',
        },
        contentInfo: {
          authorText: 'By Diane Caruana',
        },
      },
    }, {
      orientation: 'right',
      LgCardImage: {
        containerInfo: {
          className: 'w-inline-block',
          href: 'https://www.vapingpost.com/2017/03/21/10-scientific-facts-about-vaping-a-vaper-should-know/',
        },
        imgInfo: {
          className: 'right-article__image',
          sizes: '(max-width: 479px) 100vw, (max-width: 767px) 48vw, (max-width: 991px) 349.4375px, 451.1875px',
          src: 'images/magnifying-glass-1607160_1920.jpg',
          srcSet: 'images/magnifying-glass-1607160_1920-p-500.jpeg 500w, images/magnifying-glass-1607160_1920-p-1080.jpeg 1080w, images/magnifying-glass-1607160_1920-p-1600.jpeg 1600w, images/magnifying-glass-1607160_1920.jpg 1920w',
        },
      },
      LgCardHeader: {
        containerInfo: {
          href: 'https://www.vapingpost.com/2017/03/21/10-scientific-facts-about-vaping-a-vaper-should-know/',
        },
        contentInfo: {
          Hdr: '10 scientific facts about vaping a vaper should know',
        },
      },
      HdrAuthorImg: {
        imgInfo: {
          src: 'images/P1100442-150x150.jpg',
          width: '27',
        },
        contentInfo: {
          authorText: 'By Jérôme Harlay',
        },
      },
    }];
    return (
      <div className="news news__dual-articles">
        <div className="news__dual-articles w-container">
          {this.renderHelper(SubSxnCardData)}
        </div>
      </div>
    );
  }
}

export default VapeNewsSubSxn;
