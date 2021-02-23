import { Fragment } from "react"
import "../styles/card2.scss"

const Card2 = ({ weather, id }) => {
	console.log(weather)
	return (
		<Fragment>
			{weather.length === 0 ? (
				<h1>Loading</h1>
			) : (
				<div className={`card2 card2${id}`}>
					<div className="card2-top">
						<img
							src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
							alt={`${weather.weather[0].main}`}
						/>
						<p className="card2-temp">
							{parseInt(weather.main.temp)} <small>°C</small>
						</p>
						<div className="card2-place">
							<p className="city">{weather.name}</p>
							<p>{weather.sys.country}</p>
						</div>
					</div>
					<div className="card2-bottom">
						<p>Humidity: {weather.main.humidity} %</p>
						<p>{weather.wind.speed} Km/h</p>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default Card2
