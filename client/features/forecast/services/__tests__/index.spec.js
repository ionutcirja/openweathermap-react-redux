import axios from 'axios';
import { fetchForecast } from '..';

jest.mock('axios');

describe('Forecast services', () => {
  describe('fetchForecast', () => {
    it('should do a get request', () => {
      fetchForecast('London');
      expect(axios.get.mock.calls[0][0]).toContain('&q=London');
    });
  });
});
