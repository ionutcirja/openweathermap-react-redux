/* eslint-disable arrow-body-style */
import { connect } from 'react-redux';
import { groupBy } from 'lodash';
import Forecast from '../../components/forecast';

const mapStateToProps = (state) => {
	const weather = state.weather;

	if (Object.keys(weather).length === 0) {
		return {};
	}

	const list = groupBy(
		weather.list.map(item =>
			Object.assign(
				{},
				item,
				{
					day: item.dt_txt.split(' ')[0],
					hour: item.dt_txt.split(' ')[1]
				}
			)),
		'day'
	);

	return {
		cityName: weather.city.name,
		list
	};
};

export default connect(mapStateToProps)(Forecast);
