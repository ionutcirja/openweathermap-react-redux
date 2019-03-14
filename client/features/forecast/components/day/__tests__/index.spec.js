import React from 'react';
import { shallow } from 'enzyme';
import { Component } from '..';

describe('ForecastDay component', () => {
  const propsToRender = {
    day: 'Sunday',
    hoursList: [
      {
        hour: '18:00',
        weather: [
          {
            icon: '1.png',
            description: 'info1',
          },
        ],
        main: {
          temp: 1,
          humidity: 2,
          pressure: 3,
        },
      },
      {
        hour: '21:00',
        weather: [
          {
            icon: '2.png',
            description: 'info2',
          },
        ],
        main: {
          temp: 3,
          humidity: 5,
          pressure: 6,
        },
      },
    ],
    theme: {
      colours: {
        greyDark: 'grey-dark',
      },
    },
  };

  describe('render', () => {
    it('should render the day and a list of hours forecast', () => {
      const wrapper = shallow(<Component {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
