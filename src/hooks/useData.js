import { useState, useEffect } from "react"

const useData = (URL) => {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch(URL)
			.then((res) => res.json())
			.then((data) => setData(data))
	}, [URL])

	return data
}

export default useData
