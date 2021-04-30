import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from 'asset/images/home-logo.svg';

const Container = styled.header`
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  padding-left: 45px;
  padding-right: 45px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: ${props => props.theme.primary1};

  img {
    max-width: 160px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CenterFlex = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background: ${props => props.theme.primary2};
  border-radius: 100px;
  width: 190px;
  height: 48px;

  //style text
  font-family: Euclid Circular B;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background: ${props => props.theme.shade2};
  }
`;
const HeaderMenuItem = styled.li`
  //style text
  font-family: Euclid Circular B;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  text-align: center;
  color: #000;
  cursor: pointer;
  float: left;
  padding: 0 10px;
  border-bottom: 1px solid ${props => props.theme.primary1};
  :hover {
    border-bottom: 1px solid white;
  }
`;

const HeaderMenuItemWrapper = styled.ul`
  margin-right: 25px;
`;
const Nav = () => {
  return (
    <CenterFlex>
      <HeaderMenuItemWrapper>
        <HeaderMenuItem>Tools</HeaderMenuItem>
        <HeaderMenuItem>About</HeaderMenuItem>
        <HeaderMenuItem>Support</HeaderMenuItem>
      </HeaderMenuItemWrapper>
      <Button>Find your tool</Button>
    </CenterFlex>
  );
};

const Header = ({ title }) => (
  <Container>
    <Flex>
      <img src={logo} alt={title}></img>
      <Nav />
    </Flex>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
