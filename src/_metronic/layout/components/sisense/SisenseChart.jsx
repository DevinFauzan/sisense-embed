// SisenseChart.jsx
import React from 'react';
import { ColumnChart } from '@sisense/sdk-ui';
import * as DM from './sample-ecommerce';
import { measureFactory } from '@sisense/sdk-data';

const SisenseChart = () => {
  return (
    <ColumnChart
      dataSet={DM.DataSource}
      dataOptions={{
        category: [DM.Commerce.Date.Years],
        value: [
          measureFactory.sum(DM.Commerce.Revenue, 'Total Revenue')
        ],
        breakBy: [DM.Commerce.Condition],
      }}
    />
  );
};

export default SisenseChart;
