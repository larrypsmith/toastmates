import styled from 'styled-components/macro';

const Typography = styled.span`
  font-family: Roboto, sans-serif;
  font-weight: ${props => props.weight};
  font-style: ${props => props.italic ? 'italic' : 'normal'};
  font-size: ${props => props.size ? props.size : '16px'};
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
  display: ${props => props.block ? 'block' : 'inline'};
`;

export default Typography;