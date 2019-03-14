import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ForecastHour from '../index';

describe('ForecastHour component', () => {
	describe('render', () => {
		it('should render an h3 tag containing the hour', () => {
			const wrapper = shallow(
				<ForecastHour
					hour="18:00"
					icon="1.png"
					description="info"
					temp={1}
					humidity={2}
					pressure={3}
				/>
			);
			const headline = wrapper.find('h3');
			expect(headline.text()).to.equal('18:00');
		});

		it('should render an img tag containing the weather icon', () => {
			const wrapper = shallow(
				<ForecastHour
					hour="18:00"
					icon="ico"
					description="info"
					temp={1}
					humidity={2}
					pressure={3}
				/>
			);
			const img = wrapper.find('img');
			const props = img.props();
			expect(props.src).to.equal('http://openweathermap.org/img/w/ico.png');
			expect(props.alt).to.equal('info');
		});

		it('should render a span tag containing the temperature', () => {
			const wrapper = shallow(
				<ForecastHour
					hour="18:00"
					icon="1.png"
					description="info"
					temp={1}
					humidity={2}
					pressure={3}
				/>
			);
			const span = wrapper.find('span').at(0);
			expect(span.text()).to.contain('1');
		});

		it('should render a span tag containing the humidity', () => {
			const wrapper = shallow(
				<ForecastHour
					hour="18:00"
					icon="1.png"
					description="info"
					temp={1}
					humidity={2}
					pressure={3}
				/>
			);
			const span = wrapper.find('span').at(1);
			expect(span.text()).to.contain('2');
		});

		it('should render a span tag containing the pressure', () => {
			const wrapper = shallow(
				<ForecastHour
					hour="18:00"
					icon="1.png"
					description="info"
					temp={1}
					humidity={2}
					pressure={3}
				/>
			);
			const span = wrapper.find('span').at(2);
			expect(span.text()).to.contain('3');
		});
	});
});

