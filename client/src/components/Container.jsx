import styled from 'styled-components/macro';

const Container = styled.div`
  max-width: ${props => props.maxWidth ? props.maxWidth : 'none'};
  margin: 0 auto;
  
  @media screen and (max-width: 767px) {
    padding-left: 25px;
    padding-right: 25px;
  }

  @media screen and (max-width: 1059px) and (min-width: 768px) {
    padding-left: 54px;
    padding-right: 54px;
  } 

  @media screen and (min-width: 1060px) {
    padding-left: 36px;
    padding-right: 36px;
  }
`;

export default Container;