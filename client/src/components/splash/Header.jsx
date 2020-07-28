import styled from 'styled-components/macro';

const Header = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 28px;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
  color: ${({ theme }) => theme.palette.common.black};
  width: 100%;
  grid-area: header;

  @media screen and (min-width: 768px) {
    max-width: 452px;
    text-align: left;
  }

  @media screen and (min-width: 1060px) {
    font-size: 48px;
    line-height: 50px;
  }
`;

export default Header;