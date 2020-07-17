import styled from 'styled-components/macro';
import Typography from './Typography';

const AuthFormInstructions = styled(Typography)`
  padding-bottom: 40px;
  text-align: center;
  color: ${props => props.theme.palette.text.primary};
`;

export default AuthFormInstructions;