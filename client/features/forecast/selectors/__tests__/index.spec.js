import {
  forecastLocationSelector,
  forecastGroupedListSelector,
} from '..';

describe('Forecast selectors', () => {
  describe('forecastLocationSelector', () => {
    it('should return undefined if state location is not defined', () => {
      const state = { forecast: {} };
      expect(forecastLocationSelector(state)).toEqual(undefined);
    });

    it('should return the location name if state location is defined', () => {
      const state = { forecast: { location: { name: 'London' } } };
      expect(forecastLocationSelector(state)).toEqual('London');
    });
  });

  describe('forecastGroupedListSelector', () => {
    it('should return an empty object if state list is not defined', () => {
      const state = { forecast: {} };
      expect(forecastGroupedListSelector(state)).toEqual({});
    });

    it('should render the forecast list grouped by day if list is not empty', () => {
      const state = {
        forecast: {
          list: [
            {
              dt_txt: '2017-02-14 18:00:00',
            },
            {
              dt_txt: '2017-02-14 21:00:00',
            },
            {
              dt_txt: '2017-02-15 18:00:00',
            },
          ],
        },
      };
      expect(forecastGroupedListSelector(state)).toEqual({
        '2017-02-14': [
          {
            day: '2017-02-14',
            hour: '18:00:00',
            dt_txt: '2017-02-14 18:00:00',
          },
          {
            day: '2017-02-14',
            hour: '21:00:00',
            dt_txt: '2017-02-14 21:00:00',
          },
        ],
        '2017-02-15': [
          {
            day: '2017-02-15',
            hour: '18:00:00',
            dt_txt: '2017-02-15 18:00:00',
          },
        ],
      });
    });
  });
});
