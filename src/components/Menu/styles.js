import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.nav`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 2rem ;
    width: 100%;
    height: 85px;
    border-bottom: 1px grey solid;
`;

const StyledTitle = styled.h1`
    
    font-family: 'Antonio';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: 1.05px;
    text-transform: uppercase;
`;

const StyledMenu = styled.div`
    
    display: flex;
    flex-direction: row;
    gap: 15px;
   
`;

const StyledLink = styled(NavLink)`
    
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
`;

export { StyledContainer, StyledTitle, StyledMenu, StyledLink};