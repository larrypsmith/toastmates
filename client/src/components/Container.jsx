import styled from 'styled-components/macro';

const Container = styled.div`
  max-width: ${props => props.maxWidth ? props.maxWidth : 'none'};
  margin: auto;
`;

export default Container;