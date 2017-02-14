import React, { PropTypes } from 'react';

const Forecast = props =>
	<section className="forecast">
		<h1>{props.cityName}</h1>
	</section>;

Forecast.propTypes = {
	cityName: PropTypes.string.isRequired
};

Forecast.defaultProps = {
	cityName: ''
};

export default Forecast;
