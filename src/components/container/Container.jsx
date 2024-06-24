import { useEffect } from 'react';
import { StyledDiv } from './container.styles';

const Container = () => {
	useEffect(() => {
		window.addEventListener('click', printData);

		return () => window.removeEventListener('click', printData);
	}, []);

	return (
		<>
			<StyledDiv>
				<h3>ADVICE #117</h3>
				<h2>
					“It is easy to sit up and take notice, whats difficult is getting up
					and taking action.”
				</h2>
				<img src='/public/images/pattern-divider-mobile.svg' alt='' />
			</StyledDiv>
		</>
	);
};

const printData = event => {
	console.log(event);
};

export default Container;
