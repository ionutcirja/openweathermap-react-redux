// @flow
import React from 'react';
import { withTheme } from 'styled-components';
import ForecastDay from '../day/index';
import { Title } from './style';

type Props = {
  list: {
    [key: string]: {
      day: string,
      hoursList: Array<{
        hour: string,
        weather: Array<{
          icon: string,
          description: string,
        }>,
        main: {
          temp: number,
          humidity: number,
          pressure: number,
        },
      }>,
    },
  },
  location: string,
  theme: {
    colours: {
      greyDarker: string,
    },
  },
};

const Forecast = ({
  location,
  list,
  theme,
}: Props) => (
  <section>
    {location
    && (
      <Title
        colour={theme.colours.greyDarker}
      >
        {location}
      </Title>
    )}
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

export default withTheme(Forecast);
