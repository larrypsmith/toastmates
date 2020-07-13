import styled from 'styled-components/macro';

const Container = styled.div`
  max-width: ${props => props.maxWidth || 'none'};
  margin: 0 auto;
  
  @media screen and (max-width: 767px) {
    padding: ${props => '0 ' + ((props.padding && props.padding[0]) || 25) + 'px'};
  }

  @media screen and (max-width: 1059px) and (min-width: 768px) {
    padding: ${props => '0 ' + ((props.padding && props.padding[1]) || 54) + 'px'};
  } 

  @media screen and (min-width: 1060px) {
    padding: ${props => '0 ' + ((props.padding && props.padding[2]) || 36) + 'px'};
  }
`;

export default Container;