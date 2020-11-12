import React, { useState, useEffect } from "react";

export function Counter() {
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);
	const [count3, setCount3] = useState(0);

	// De forma similar a componentDidMount y componentDidUpdate
	useEffect(
		() => {
			setTimeout(() => {
				setCount1(count1 + 1);
			}, 1000);
		},
		[count1]
	);

	/*useEffect(() => {
		setInterval(() => {
			setNumber(count2 => (count2 = count2 + 1));
		}, 1000);
	});*/

	useEffect(
		() => {
			if (count1 == 10) {
				setCount1(0);
				setCount2(count2 + 1);
			}
		},
		[count1]
	);

	useEffect(
		() => {
			if (count2 == 10) {
				setCount2(0);
				setCount3(count3 + 1);
			}
		},
		[count2]
	);

	return (
		<div>
			<p>
				{count3}
				{count2}
				{count1}
			</p>
		</div>
	);
}
