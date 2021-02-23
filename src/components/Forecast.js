import { Fragment } from "react"
import ForecastCard from "./ForecastCard"
import "../styles/forecast.scss"

const Forecast = ({ forecast }) => {
	return (
		<Fragment>
			{forecast.length === 0 ? (
				<h1>Loading</h1>
			) : (
				<div className="forecast">
					<h1>
						3 Days <span>Forecast</span>
					</h1>
					<ForecastCard forecast={forecast} i={0} />
					<ForecastCard forecast={forecast} i={1} />
					<ForecastCard forecast={forecast} i={2} />
				</div>
			)}
		</Fragment>
	)
}

export default Forecast
