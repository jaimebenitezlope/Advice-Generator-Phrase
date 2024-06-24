import { StyledButton } from './button.styles';

const Button = ({ children }) => {
	return (
		<>
			<StyledButton>
				<img className='icon' src='/public/images/icon-dice.svg' alt='' />
			</StyledButton>
		</>
	);
};

export default Button;
