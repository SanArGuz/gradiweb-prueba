import React from "react"
import location from "../images/location.png"
import map from "../images/map.png"
import "../styles/main.scss"

const Main = () => {
	return (
		<div className="main">
			<h1>
				<span>
					<img className="icon" src={location} alt="location-icon" />
				</span>
				Bogotá
			</h1>
			<img src={map} alt="map" className="map" />
		</div>
	)
}

export default Main
