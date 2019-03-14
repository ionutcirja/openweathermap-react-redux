// @flow
import axios from 'axios';
import config from '../../../config';

export const fetchForecast = (location: string) => (
  axios.get(`/forecast?APPID=${config.API_KEY}&q=${location}`)
);
