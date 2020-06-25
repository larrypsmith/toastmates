import styled from 'styled-components/macro';

const FlexContainer = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'stretch'};
  padding: 0 25px;
`;

export default FlexContainer;