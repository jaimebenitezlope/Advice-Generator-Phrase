import { useEffect } from 'react';
import { StyledDiv } from './container.styles';

const Container = () => {
	useEffect(() => {
		window.addEventListener('click', printData);

		return () => window.removeEventListener('click', printData);
	}, []);

	return (
		<>
			<StyledDiv>hola</StyledDiv>
		</>
	);
};

const printData = event => {
	console.log(event);
};

export default Container;
