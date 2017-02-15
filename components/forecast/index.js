import React, { PropTypes } from 'react';
import ForecastDay from '../forecast-day';

const Forecast = props =>
	<section className="forecast">
		<h1>{props.city}</h1>
		<ul className="forecast-days-list">
			{
				Object.keys(props.list).length > 0 &&
				Object.keys(props.list).map(key =>
					(
						<ForecastDay
							key={key}
							day={key}
							hoursList={props.list[key]}
						/>
					)
				)
			}
		</ul>
	</section>;

Forecast.propTypes = {
	city: PropTypes.string.isRequired,
	list: PropTypes.object.isRequired
};

Forecast.defaultProps = {
	city: '',
	list: {}
};

export default Forecast;
