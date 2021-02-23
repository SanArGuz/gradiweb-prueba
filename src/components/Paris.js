import { Fragment } from "react"

const Paris = ({ weather }) => {
	return (
		<Fragment>
			{weather.length === 0 ? (
				<h1>Loading</h1>
			) : (
				<Fragment>
					<h1>{weather.name}</h1>
					<h1>{weather.weather[0].main}</h1>
					<h1>{parseInt(weather.main.temp)} °C</h1>
					<img
						src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
						alt={`${weather.weather[0].main}`}
					/>
					<h1>Humidity: {weather.main.humidity} %</h1>
					<h1>Wind: {weather.wind.speed} Km/h</h1>
				</Fragment>
			)}
		</Fragment>
	)
}

export default Paris
