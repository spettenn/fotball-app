import React, { useState, useEffect } from 'react';

function LiveDate() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const month = time.getMonth() + 1;
	const day = time.getDate();
	const year = time.getFullYear();

	return (
		<div className='date_landing'>
			{month}/{day}/{year}
		</div>
	);
}

export default LiveDate;
