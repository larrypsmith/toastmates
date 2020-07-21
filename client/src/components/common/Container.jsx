import styled from 'styled-components/macro';

const Container = styled.div`
  max-width: ${props => props.maxWidth || '1024px'};
  margin: 0 auto;
  box-sizing: content-box;
  
  @media screen and (max-width: 767px) {
    padding-left: ${props => ((props.padding && props.padding[0]) || 16) + 'px'};
    padding-right: ${props => ((props.padding && props.padding[0]) || 16) + 'px'};
  }

  @media screen and (max-width: 1059px) and (min-width: 768px) {
    padding-left: ${props => ((props.padding && props.padding[1]) || 24) + 'px'};
    padding-right: ${props => ((props.padding && props.padding[1]) || 24) + 'px'};
  } 

  @media screen and (min-width: 1060px) {
    padding-left: ${props => ((props.padding && props.padding[2]) || 36) + 'px'};
    padding-right: ${props => ((props.padding && props.padding[2]) || 36) + 'px'};
  }
`;

export default Container;