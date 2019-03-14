import React from 'react';
import { shallow } from 'enzyme';
import { Wrapper } from '..';

describe('Forecast container', () => {
	const propsToRender = {
	  actions: {
      forecastRequest: jest.fn(),
    },
  };

	describe('render', () => {
		it('should render a Forecast component', () => {
			const wrapper = shallow(<Wrapper {...propsToRender} />);
			expect(wrapper).toMatchSnapshot();
		});
	});

	describe('componentDidMount', () => {
    it('should call forecastRequest action', () => {
      shallow(<Wrapper {...propsToRender} />);
      expect(propsToRender.actions.forecastRequest).toHaveBeenCalledWith({ location: 'London' });
    });
  });
});
