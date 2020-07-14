import styled from 'styled-components/macro';

const StyledVerticalContainer = styled.div`
  padding: 25px 0px 40px 0px;

  @media screen and (min-width: 768px) {
    padding-top: 75px;
    padding-bottom: 15px;
  }

  @media screen and (min-width: 1060px) {
    padding-top: 115px;
    padding-bottom: 135px;
  }
`;

export default StyledVerticalContainer;