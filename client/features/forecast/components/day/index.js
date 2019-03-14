// @flow
import React from 'react';
import { withTheme } from 'styled-components';
import ForecastHour from '../hour';
import { Day, Title } from './style';

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
  theme: {
    colours: {
      greyDark: string,
    }
  }
};

const ForecastDay = ({
  day,
  hoursList,
  theme,
}: Props) => (
  <Day>
    <Title
      colour={theme.colours.greyDark}
    >
      {day}
    </Title>
    <ul>
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

export default withTheme(ForecastDay);
