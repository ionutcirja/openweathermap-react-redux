/* eslint-disable arrow-body-style */
import { connect } from 'react-redux';
import Forecast from '../../components/forecast';

const mapStateToProps = (state) => {
	const weather = state.weather;

	if (Object.keys(weather).length === 0) {
		return {};
	}

	return {
		cityName: state.weather.city.name
	};
};

export default connect(mapStateToProps)(Forecast);
