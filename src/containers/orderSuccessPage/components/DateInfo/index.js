import React from 'react';

import { WebflowJs } from './assets/utils';

const DateInfo = () => {
  WebflowJs(); //eslint-disable-line

  const {
    orderDate,
    } = this.props;

  return (
    <p className="date--phone-portrait packaging-info packaging-info__date">Date: {orderDate}
    </p>
  );
};


export default DateInfo;
