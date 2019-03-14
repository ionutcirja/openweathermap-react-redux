// @flow
import React from 'react';
import { withTheme } from 'styled-components';
import { Hour, Title, Details } from './style';

type Props = {
  hour: string,
  icon: string,
  description: string,
  temp: number,
  humidity: number,
  pressure: number,
  theme: {
    colours: {
      grey: string,
      greyLight: string,
    },
  },
};

const ForecastHour = ({
  hour,
  icon,
  description,
  temp,
  humidity,
  pressure,
  theme,
}: Props) => (
  <Hour>
    <Title
      colour={theme.colours.grey}
    >
      {hour}
    </Title>
    <img
      src={`http://openweathermap.org/img/w/${icon}.png`}
      alt={description}
    />
    <p>
      <Details
        colour={theme.colours.grey}
      >
        {`Temperature: ${temp}`}
      </Details>
      <Details
        colour={theme.colours.grey}
      >
        {`Humidity: ${humidity}`}
      </Details>
      <Details
        colour={theme.colours.grey}
      >
        {`Pressure: ${pressure}`}
      </Details>
    </p>
  </Hour>
);

export default withTheme(ForecastHour);
