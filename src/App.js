import { useEffect, useState } from "react";
import "./App.css";

const rangeEnd = 256;
const App = () => {
	
	const [steps, setSteps] = useState([]);
	const [colorClicked, setColorClicked] = useState([]);

	useEffect(() => {
		let stps = [];
		for (let i = 1; i <= rangeEnd; i++) {
			if (i % 8 === 0) {
				stps[i] = i;
			}
		}
		setSteps(stps);

	}, []);

	
	return (
		<div className="app">
			<h1 style={{ color: `rgb(${colorClicked})` }}>
				{colorClicked.length
					? `Selected color code is RGB( ${colorClicked})`
					: "Click on the color to get the RGB color code"}
			</h1>
			<div className="canvas">

				{steps.map(r => {
					return steps.map(g => {
						return steps.map(b => {
							return (
								<span
									onClick={() => setColorClicked(`${r}, ${g}, ${b}`)}
									key={`${r}, ${g}, ${b}`}
									style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
								>
									{" "}
								</span>
							);
						});
					});
				})}
			</div>
		</div>
	);
};

export default App;

