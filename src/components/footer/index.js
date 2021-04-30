import React from 'react';
import styled from 'styled-components';
import logo from 'asset/images/footer-logo.svg';
import backToTop from 'asset/images/back-to-top.svg';
import facebookIcon from 'asset/images/facebook.svg';
import twitterIcon from 'asset/images/twitter.svg';
import instagramIcon from 'asset/images/instagram.svg';
import linkedinIcon from 'asset/images/linkedin.svg';
import subscribeReturnIcon from 'asset/images/subscribe-return.svg';
const Container = styled.footer`
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  padding-left: 45px;
  padding-right: 45px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: ${props => props.theme.white};

  @media (max-width: 768px) {
    padding-left: 26px;
    padding-right: 26px;
  }
`;

const Divider = styled.hr`
  height: 1px;
  margin: 0;
  border: none;
  flex-shrink: 0;
  background-color: #e0e0e0;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CopyrightWrapper = styled.div`
  display: flex;
  float: right;
  > span {
    display: inline-block;
    font-size: 13px;
    line-height: 17px;
    padding-left: 4px;
    padding-right: 4px;
    &:not(:last-child) {
      border-right: 1px #000000 solid;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: 'center';
    > span {
      padding-left: 4px;
      padding-right: 4px;
      border-right: none;
    }
  }
`;

const BackToTopWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  right: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    > span {
      padding-left: 4px;
      padding-right: 4px;
      border-right: none;
    }
  }
`;

const FooterMainWrapper = styled.div`
  display: flex;
  padding: 30px 15px;
  position: relative;
  > span {
    display: inline-block;
    font-size: 13px;
    line-height: 17px;
    padding-left: 4px;
    padding-right: 4px;
    &:not(:last-child) {
      border-right: 1px #000000 solid;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: 'center';
    > span {
      padding-left: 4px;
      padding-right: 4px;
      border-right: none;
    }
  }
`;

const SubscribeWrapper = styled.div`
  padding: 80px 0;
  > div {
    max-width: 1070px;
    margin: 0 auto;
    position: relative;
  }
  h4 {
  }

  input[type='email'] {
    background: ${props => props.theme.grey};
    padding: 15px 50px 15px 36px;
    border-radius: 8px;
    border: none;
    margin-top: 25px;
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    > span {
      padding-left: 4px;
      padding-right: 4px;
      border-right: none;
    }
  }
`;

const Copyright = () => (
  <CopyrightWrapper>
    <span> ©2020 Reactify</span>
    <span>All Rights Reserved</span>
    <span>ABN: 00 000 000 000</span>
    <span>Trading as Reactify PTY LTD</span>
  </CopyrightWrapper>
);

const Button = styled.button`
  background: ${props => props.theme.grey};
  border-radius: 100px;
  width: 50px;
  height: 50px;

  //style text
  font-family: Euclid Circular B;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background: ${props => props.theme.shade2};

    /* style text */
    font-size: 19px;
    line-height: 26px;
  }
`;

const SocialIconsWrapper = styled(Flex)`
  flex-basis: 300px;
`;
const BackToTop = () => {
  return (
    <BackToTopWrapper>
      <Button>
        <img src={backToTop} alt="Back-to-top" />
      </Button>
    </BackToTopWrapper>
  );
};
const SocialIcons = () => {
  return (
    <SocialIconsWrapper>
      <a href="#/" alt="Reactify">
        <img src={facebookIcon} alt="Reactify Facebook" />
      </a>
      <a href="#/" alt="Reactify">
        <img src={twitterIcon} alt="Reactify Twitter" />
      </a>
      <a href="#/" alt="Reactify">
        <img src={instagramIcon} alt="Reactify Instagram" />
      </a>
      <a href="#/" alt="Reactify">
        <img src={linkedinIcon} alt="Reactify Linkedin" />
      </a>
    </SocialIconsWrapper>
  );
};

const FooterMenuItemWrapper = styled.ul``;
const FooterMenuItem = styled.li`
  margin: 15px 0;
`;

const FooterMenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-basis: 100%;
`;
const FooterMenu = () => {
  return (
    <FooterMenuWrapper>
      <FooterMenuItemWrapper>
        <FooterMenuItem>Tools</FooterMenuItem>
        <FooterMenuItem>About</FooterMenuItem>
        <FooterMenuItem>Support</FooterMenuItem>
      </FooterMenuItemWrapper>
      <FooterMenuItemWrapper>
        <FooterMenuItem>Tools</FooterMenuItem>
        <FooterMenuItem>About</FooterMenuItem>
        <FooterMenuItem>Support</FooterMenuItem>
      </FooterMenuItemWrapper>
      <FooterMenuItemWrapper>
        <FooterMenuItem>Tools</FooterMenuItem>
        <FooterMenuItem>About</FooterMenuItem>
        <FooterMenuItem>Support</FooterMenuItem>
      </FooterMenuItemWrapper>
      <FooterMenuItemWrapper>
        <FooterMenuItem>Tools</FooterMenuItem>
        <FooterMenuItem>About</FooterMenuItem>
        <FooterMenuItem>Support</FooterMenuItem>
      </FooterMenuItemWrapper>
    </FooterMenuWrapper>
  );
};

const FooterLogoImage = styled.img`
  max-width: 80px;
`;

const FooterMain = () => {
  return (
    <FooterMainWrapper>
      <FooterLogoImage src={logo} alt="Rectify" />
      <FooterMenu />
      <SocialIcons />
      <BackToTop />
    </FooterMainWrapper>
  );
};
const EnterButton = styled.button`
  position: absolute;
  right: 15px;
  bottom: 5px;
  z-index: 100;
  cursor: pointer;

  img {
    max-width: 25px;
  }
`;
const Subscribe = () => {
  return (
    <SubscribeWrapper>
      <div>
        <h4>Keep up to date with the latest from Reactify</h4>
        <input
          type="email"
          id="subscribe-email"
          placeholder="Enter your email address"
        />
        <EnterButton>
          <img src={subscribeReturnIcon} alt="Subscribe" />
        </EnterButton>
      </div>
    </SubscribeWrapper>
  );
};
const Footer = () => (
  <Container>
    <Subscribe />
    <Divider />
    <FooterMain />
    <Copyright />
  </Container>
);

Footer.propTypes = {};

export default Footer;
