import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ForecastDay from '../index';

describe('ForecastDay component', () => {
	const list = [
		{
			hour: '18:00',
			weather: [
				{
					icon: '1.png',
					description: 'info1'
				}
			],
			main: {
				temp: 1,
				humidity: 2,
				pressure: 3
			}
		},
		{
			hour: '21:00',
			weather: [
				{
					icon: '2.png',
					description: 'info2'
				}
			],
			main: {
				temp: 3,
				humidity: 5,
				pressure: 6
			}
		}
	];

	describe('render', () => {
		it('should render an h2 tag containing the day name', () => {
			const wrapper = shallow(<ForecastDay day="Sunday" hoursList={list} />);
			const headline = wrapper.find('h2');
			expect(headline.text()).to.equal('Sunday');
		});

		it('should render a list of ForecastHour components', () => {
			const wrapper = shallow(<ForecastDay day="Sunday" hoursList={list} />);
			const components = wrapper.find('ForecastHour');
			const length = components.length;
			expect(length).to.equal(2);
			let props;
			for (let i = 0; i < length; i += 1) {
				props = components.at(i).props();
				expect(props.hour).to.equal(list[i].hour);
				expect(props.icon).to.equal(list[i].weather[0].icon);
				expect(props.description).to.equal(list[i].weather[0].description);
				expect(props.temp).to.equal(list[i].main.temp);
				expect(props.humidity).to.equal(list[i].main.humidity);
				expect(props.pressure).to.equal(list[i].main.pressure);
			}
		});
	});
});
