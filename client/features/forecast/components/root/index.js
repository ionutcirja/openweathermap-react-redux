// @flow
import React from 'react';
import ForecastDay from '../day/index';

type Props = {
  list: {
    [key: string]: any,
  },
};

const Forecast = ({ list }: Props) => (
  <section>
    {Object.keys(list).length > 0
      && (
        <ul>
          {Object.keys(list).map(key => (
            <ForecastDay
              key={key}
              day={key}
              hoursList={list[key]}
            />
          ))}
        </ul>
      )}
  </section>
);

export default Forecast;
