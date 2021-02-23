import React from "react"
import "../styles/card1.scss"

const Card1 = ({ weather }) => {
	return (
		<div className="card1">
			<div className="image">
				<img
					src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
					alt={`${weather.current.weather[0].main}`}
				/>
				<p> {weather.current.weather[0].main}</p>
			</div>
			<div className="temp">
				<h1>
					{weather.current.temp}
					<span>°C</span>
				</h1>
			</div>
		</div>
	)
}

export default Card1
