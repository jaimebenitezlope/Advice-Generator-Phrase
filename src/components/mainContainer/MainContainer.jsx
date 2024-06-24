import Button from '../button/Button';
import Container from '../container/Container';
import { StyledDiv } from './mainContainer.styles';

const MainContainer = () => {
	return (
		<>
			<StyledDiv>
				<Container />
				<Button />
			</StyledDiv>
		</>
	);
};

export default MainContainer;
