import React from 'react';
import { shallow } from 'enzyme';
import { Wrapper } from '..';

describe('Forecast container', () => {
	const propsToRender = {
	  actions: {
      forecastRequest: jest.fn(),
    },
  };

	describe('componentDidMount', () => {
    it('should call forecastRequest action', () => {
      shallow(<Wrapper {...propsToRender} />);
      expect(propsToRender.actions.forecastRequest).toHaveBeenCalledWith({ location: 'London' });
    });
  });
});
