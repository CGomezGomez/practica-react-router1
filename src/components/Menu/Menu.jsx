import { StyledTitle, StyledMenu, StyledContainer, StyledLink } from "./styles";

const Menu = () => {
	return (
	<>
        <StyledContainer>
            <StyledTitle>THE PLANETS</StyledTitle>
            <StyledMenu>
                <StyledLink to="/">MERCURY</StyledLink>
                <StyledLink to="/venus">VENUS</StyledLink>
                <StyledLink to="/earth">EARTH</StyledLink>
                <StyledLink to="/mars">MARS</StyledLink>
                <StyledLink to="/jupiter">JUPITER</StyledLink>
                <StyledLink to="/saturn">SATURN</StyledLink>
                <StyledLink to="/uranus">URANUS</StyledLink>
                <StyledLink to="/neptune">NEPTUNE</StyledLink>
            </StyledMenu>
        </StyledContainer>
	</>
	);
};

export default Menu;