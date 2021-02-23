import React from "react"
import "../styles/ForecastCard.scss"

const ForecastCard = ({ forecast, i }) => {
	var d = new Date()
	var weekday = new Array(7)
	weekday[0] = "Sunday"
	weekday[1] = "Monday"
	weekday[2] = "Tuesday"
	weekday[3] = "Wednesday"
	weekday[4] = "Thursday"
	weekday[5] = "Friday"
	weekday[6] = "Saturday"

	var day = weekday[d.getDay() + i + 1]

	return (
		<div className="forecast-card">
			<img
				src={`http://openweathermap.org/img/wn/${forecast[i].weather[0].icon}@2x.png`}
				alt={`${forecast[i].weather[0].main}`}
			/>
			<div className="card-center">
				<p className="day">{day}</p>
				<p className="day-condition">{forecast[i].weather[0].description} </p>
			</div>
			<div className="right-temp" id={i}>
				{parseInt(forecast[i].temp.min)}
				<small>°C </small>
				{" / "}
				{parseInt(forecast[i].temp.max)}
				<small>°C</small>
			</div>
		</div>
	)
}

export default ForecastCard
