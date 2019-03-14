import React from 'react';
import { shallow } from 'enzyme';
import { Component } from '..';

describe('ForecastHour component', () => {
  const propsToRender = {
    hour: '12:00',
    icon: 'icon',
    description: 'info',
    temp: 100,
    humidity: 200,
    pressure: 1000,
    theme: {
      colours: {
        grey: 'grey',
        greyLight: 'grey-light',
      },
    },
  };

  describe('render', () => {
    it('should render the hour, an icon representing the weather condition'
      + ' and temperature, humidity and pressure values', () => {
      const wrapper = shallow(<Component {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
