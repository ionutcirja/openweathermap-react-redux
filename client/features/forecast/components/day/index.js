// @flow
import React from 'react';
import ForecastHour from '../hour';
import { Day } from './style';

type Props = {
  day: string,
  hoursList: Array<{
    hour: string,
    weather: Array<{
      icon: string,
      description: string,
    }>,
    main: {
      [key: string]: any,
    },
  }>,
};

const ForecastDay = ({
  day,
  hoursList,
}: Props) => (
  <Day>
    <h2>{day}</h2>
    <ul className="forecast-hours-list">
      {hoursList.map(item => (
        <ForecastHour
          key={item.hour}
          hour={item.hour}
          icon={item.weather[0].icon}
          description={item.weather[0].description}
          {...item.main}
        />
      ))}
    </ul>
  </Day>
);

export default ForecastDay;
