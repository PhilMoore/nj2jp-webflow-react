import React from 'react';

import { WebflowJs } from './assets/utils';

const HdrVipInfo = () => {
  WebflowJs(); //eslint-disable-line

  const {
    trackingNo,
    } = this.props;

  return (
    <p className="packaging-info packaging-info__tracking">Tracking #: {trackingNo}
    </p>
  );
};


export default HdrVipInfo;
