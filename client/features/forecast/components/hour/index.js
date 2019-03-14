// @flow
import React from 'react';
import { Hour, Details } from './style';

type Props = {
  hour: string,
  icon: string,
  description: string,
  temp: number,
  humidity: number,
  pressure: number,
};

const ForecastHour = ({
  hour,
  icon,
  description,
  temp,
  humidity,
  pressure,
}: Props) => (
  <Hour>
    <h3>{hour}</h3>
    <img
      src={`http://openweathermap.org/img/w/${icon}.png`}
      alt={description}
    />
    <p>
      <Details>{`Temperature: ${temp}`}</Details>
      <Details>{`Humidity: ${humidity}`}</Details>
      <Details>{`Pressure: ${pressure}`}</Details>
    </p>
  </Hour>
);


export default ForecastHour;
