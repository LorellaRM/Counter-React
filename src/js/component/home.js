import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Counter } from "./timer.jsx";

//create your first component
export function Home() {
	return (
		<div>
			<Counter />
		</div>
	);
}
