// @flow
import React from 'react';
import Hour from '../hour';
import { DayItem } from './style';

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

const Day = ({
  day,
  hoursList,
}: Props) => (
  <DayItem>
    <h2>{day}</h2>
    <ul className="forecast-hours-list">
      {hoursList.map(item => (
        <Hour
          key={item.hour}
          hour={item.hour}
          icon={item.weather[0].icon}
          description={item.weather[0].description}
          {...item.main}
        />
      ))}
    </ul>
  </DayItem>
);

export default Day;
