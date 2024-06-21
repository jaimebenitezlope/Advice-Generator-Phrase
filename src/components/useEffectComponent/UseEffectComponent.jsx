import { useEffect, useState } from 'react';

const UseEffectComponent = () => {
	useEffect(() => {
		window.addEventListener('click', printData);

		return () => window.removeEventListener('click', printData);
	}, []);

	return (
		<>
			<h1>UseEffect</h1>
		</>
	);
};

const printData = event => {
	console.log(event);
};

export default UseEffectComponent;
