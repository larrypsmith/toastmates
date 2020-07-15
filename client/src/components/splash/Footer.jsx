import React from 'react';
import styled from 'styled-components/macro';
import Container from '../common/Container';

const Footer = () => (
  <StyledFooter>
    <Container>
      <AboutGrid>
        <Header>
          Larry Smith
        </Header>
        <Link href="https://larrysmith.me/">Portfolio</Link>
        <Link href="https://www.linkedin.com/in/larrypaulsmith/">LinkedIn</Link>
        <Link href="https://github.com/larrypsmith/">GitHub</Link>
        <Link href="https://angel.co/u/larry-paul-smith">AngelList</Link>
      </AboutGrid>
    </Container>
  </StyledFooter>
);

export default Footer;

// Toastmates, name, GitHub, LinkedIn, AngelList, Resume, Portfolio site

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.palette.common.black};
  color: ${props => props.theme.palette.common.white};
  padding-top: 43px;
  padding-bottom: 43px;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Header = styled.div`
  margin-bottom: 36px; 
  grid-column: span 2;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    grid-column: span 4;
  }
`;

const Link = styled.a`
  color: ${props => props.theme.palette.text.secondary};
  font-size: 14px;
  line-height: 24px;
  padding: 18px 0 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;