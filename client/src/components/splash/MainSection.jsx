import styled from 'styled-components/macro';

const MainSection = styled.div`
  margin-left: -16px;
  margin-right: -16px;
  background-color: ${props => props.theme.palette.common.white};
  padding-bottom: 16px;

  &:last-child {
    padding-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 0;
    margin-left: -24px;
    margin-right: -24px;
  }

  @media screen and (min-width: 1060px) {
    padding-bottom: 0;
    margin-left: -36px;
    margin-right: -36px;
  }
`;

export default MainSection;