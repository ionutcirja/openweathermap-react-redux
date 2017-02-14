import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Forecast from './';

describe('Forecast component', () => {
	const list = {
		'2017-02-14': [
			{
				day: '2017-02-14',
				hour: '18:00:00',
				dt_txt: '2017-02-14 18:00:00'
			},
			{
				day: '2017-02-14',
				hour: '21:00:00',
				dt_txt: '2017-02-14 21:00:00'
			}
		],
		'2017-02-15': [
			{
				day: '2017-02-15',
				hour: '18:00:00',
				dt_txt: '2017-02-15 18:00:00'
			}
		]
	};

	describe('render', () => {
		it('should render n h1 one containing the city name', () => {
			const wrapper = shallow(<Forecast cityName="London" list={list} />);
			const headline = wrapper.find('h1');
			expect(headline.text()).to.equal('London');
		});

		it('should render a list of ForecastDay components', () => {
			const wrapper = shallow(<Forecast cityName="London" list={list} />);
			const components = wrapper.find('ForecastDay');
			const length = components.length;
			expect(length).to.equal(2);
			let props;
			for (let i = 0; i < length; i += 1) {
				props = components.at(i).props();
				expect(props.dayName).to.equal(Object.keys(list)[i]);
				expect(props.hoursList).to.equal(list[Object.keys(list)[i]]);
			}
		});
	});
});
