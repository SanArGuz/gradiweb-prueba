import { Fragment } from "react"
import useData from "../hooks/useData"
import Forecast from "../components/forecast"
import Paris from "../components/Paris"

const baseURL =
	"https://api.openweathermap.org/data/2.5/onecall?lat=4.624335&lon=-74.063644&exclude=minutely,hourly&units=metric"
const baseURLParis = "https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric"

const Home = () => {
	const weather = useData(`${baseURL}&appid=${process.env.REACT_APP_API_KEY}`)
	const paris = useData(`${baseURLParis}&appid=${process.env.REACT_APP_API_KEY}`)

	return (
		<div>
			{weather.length === 0 ? (
				<h1>Loading</h1>
			) : (
				<Fragment>
					<h1>Bogotá</h1>
					<h1>Temp: {weather.current.temp}°C</h1>
					<h2>{weather.current.weather[0].main}</h2>
					<img
						src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
						alt={`${weather.current.weather[0].main}`}
					/>
					<Forecast forecast={weather.daily} />
					<Paris weather={paris} />
				</Fragment>
			)}
		</div>
	)
}

export default Home
