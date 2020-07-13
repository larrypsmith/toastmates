import styled from 'styled-components/macro';

const FlexChild = styled.div`
  align-self: ${props => props.alignSelf || 'auto'};
`;

export default FlexChild;