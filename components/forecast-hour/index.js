import React, { PropTypes } from 'react';

const ForecastHour = props =>
	<li className="forecast-hour">
		<p>{props.hour}</p>
		<img
			src={`http://openweathermap.org/img/w/${props.icon}.png`}
			alt={props.description}
		/>
		<p className="details">
			<span>Temperature: {props.temp}</span>
			<span>Humidity: {props.humidity}</span>
			<span>Pressure: {props.pressure}</span>
		</p>
	</li>;

ForecastHour.propTypes = {
	hour: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	temp: PropTypes.number.isRequired,
	humidity: PropTypes.number.isRequired,
	pressure: PropTypes.number.isRequired
};

export default ForecastHour;

