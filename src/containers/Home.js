import { Fragment } from "react"
import useData from "../hooks/useData"
import Forecast from "../components/Forecast"
import Card1 from "../components/Card1"
import Card2 from "../components/Card2"
import Main from "../components/Main"
import PlaceVisit from "../components/PlaceVisit"
import Social from "../components/Social"
import AddLocation from "../components/AddLocation"
import "../styles/home.scss"

const baseURL =
	"https://api.openweathermap.org/data/2.5/onecall?lat=4.624335&lon=-74.063644&exclude=minutely,hourly&units=metric"
const baseURLCity = `https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric`
const baseURLCity2 = `https://api.openweathermap.org/data/2.5/weather?q=florence&units=metric`

const Home = () => {
	const weather = useData(`${baseURL}&appid=${process.env.REACT_APP_API_KEY}`)
	const cityWeather = useData(`${baseURLCity}&appid=${process.env.REACT_APP_API_KEY}`)
	const city2Weather = useData(`${baseURLCity2}&appid=${process.env.REACT_APP_API_KEY}`)

	return (
		<div>
			{weather.length === 0 ? (
				<h1>Loading</h1>
			) : (
				<Fragment>
					<Main weather={weather} />
					<Card1 weather={weather} />
					<div className="dashboard">
						<Forecast forecast={weather.daily} />
						<PlaceVisit />
						<Social />
					</div>
					<Card2 weather={cityWeather} id="a" />
					<Card2 weather={city2Weather} id="b" />
					<AddLocation />
				</Fragment>
			)}
		</div>
	)
}

export default Home
