// @flow
import { createSelector } from 'reselect';
import { groupBy } from 'lodash';
import type { State } from '../../../types';

export const forecastListSelector = (state: State) => state.forecast.list || [];

export const forecastGroupedListSelector = createSelector(
  forecastListSelector,
  list => groupBy(
    list.map(item => ({
      ...item,
      day: item.dt_txt.split(' ')[0],
      hour: item.dt_txt.split(' ')[1],
    })),
    'day',
  ),
);
