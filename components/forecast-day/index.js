import React, { PropTypes } from 'react';
import ForecastHour from '../forecast-hour';

const ForecastDay = props =>
	<li className="forecast-day">
		<p>{props.dayName}</p>
		<ul className="forecast-hours-list">
			{
				props.hoursList.map(item =>
					(
						<ForecastHour
							key={item.hour}
							hour={item.hour}
							icon={item.weather[0].icon}
							description={item.weather[0].description}
							{...item.main}
						/>
					)
				)
			}
		</ul>
	</li>;

ForecastDay.propTypes = {
	dayName: PropTypes.string.isRequired,
	hoursList: PropTypes.array.isRequired
};

export default ForecastDay;
