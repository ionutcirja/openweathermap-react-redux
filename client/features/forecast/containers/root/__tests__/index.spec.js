import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Forecast from '../index';

describe('Forecast container', () => {
	const middlewares = [thunk];
	const mockStore = configureMockStore(middlewares);

	describe('mapStateToProps', () => {
		it('should render a Forecast component and pass an empty object as props if weather state is empty', () => {
			const weather = {};
			const store = mockStore({ weather });
			const wrapper = shallow(<Forecast store={store} />);
			const component = wrapper.find('Forecast');
			const props = component.props();
			expect(component.length).to.equal(1);
			expect(props.city).to.eql('');
			expect(props.list).to.eql({});
		});

		it('should render a Forecast component and pass the city name and a list of days ' +
		'if weather data is not empty', () => {
			const weather = {
				city: {
					name: 'London'
				},
				list: [
					{
						dt_txt: '2017-02-14 18:00:00'
					},
					{
						dt_txt: '2017-02-14 21:00:00'
					},
					{
						dt_txt: '2017-02-15 18:00:00'
					}
				]
			};
			const store = mockStore({ weather });
			const wrapper = shallow(<Forecast store={store} />);
			const component = wrapper.find('Forecast');
			const props = component.props();
			expect(component.length).to.equal(1);
			expect(props.city).to.eql('London');
			expect(props.list).to.eql({
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
			});
		});
	});
});
