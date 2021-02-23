import { Fragment } from "react"

const Forecast = ({ forecast }) => {
	return (
		<div>
			{forecast.length === 0 ? (
				<h1>Loading</h1>
			) : (
				<Fragment>
					<h1>
						<img
							src={`http://openweathermap.org/img/wn/${forecast[0].weather[0].icon}@2x.png`}
							alt={`${forecast[0].weather[0].main}`}
						/>
						Tuesday {forecast[0].weather[0].description}{" "}
						{parseInt(forecast[0].temp.min)}°C / {parseInt(forecast[0].temp.max)}°C
					</h1>
					<h1>
						<img
							src={`http://openweathermap.org/img/wn/${forecast[1].weather[0].icon}@2x.png`}
							alt={`${forecast[1].weather[0].main}`}
						/>
						Wednesday {forecast[1].weather[0].description}{" "}
						{parseInt(forecast[1].temp.min)}°C / {parseInt(forecast[1].temp.max)}°C
					</h1>
					<h1>
						<img
							src={`http://openweathermap.org/img/wn/${forecast[2].weather[0].icon}@2x.png`}
							alt={`${forecast[2].weather[0].main}`}
						/>
						Thursday {forecast[2].weather[0].description}{" "}
						{parseInt(forecast[2].temp.min)}°C / {parseInt(forecast[2].temp.max)}°C
					</h1>
				</Fragment>
			)}
		</div>
	)
}

export default Forecast
