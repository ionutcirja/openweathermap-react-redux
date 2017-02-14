import React, { PropTypes } from 'react';
import ForecastDay from '../forecast-day';

const Forecast = props =>
	<section className="forecast">
		<h1>{props.cityName}</h1>
		<ul className="forecast-days-list">
			{
				Object.keys(props.list).length > 0 &&
				Object.keys(props.list).map(key =>
					(
						<ForecastDay
							key={key}
							dayName={key}
							hoursList={props.list[key]}
						/>
					)
				)
			}
		</ul>
	</section>;

Forecast.propTypes = {
	cityName: PropTypes.string.isRequired,
	list: PropTypes.object.isRequired
};

Forecast.defaultProps = {
	cityName: '',
	list: {}
};

export default Forecast;
