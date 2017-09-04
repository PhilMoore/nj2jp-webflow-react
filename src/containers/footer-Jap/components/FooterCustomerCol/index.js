import React from 'react';

import { WebflowJs } from './assets/utils';

const FooterCustomerCol = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="footer__legal-pages legal-pages--desktop legal-pages--phone-portrait">
      <h3 className="footer__heading">カスタマーケア
      </h3>
      <div className="footer__content">
        <a className="footer__nav nav--link" href="#">ショップ
        </a>
        <a className="footer__nav nav--link" href="#">個人情報保護方針

        </a>
        <a className="footer__nav nav--link" href="#">利用規約
        </a>
        <a className="footer__nav nav--link" href="#">運送
        </a>
        <a className="footer__nav nav--link" href="#">返品
        </a>
        <a className="footer__nav nav--link" href="#">ニコチン免責事項
        </a>
      </div>
    </div>
  );
};


export default FooterCustomerCol;
