import styled from 'styled-components/macro';

const AuthFormInput = styled.input`
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  color: rgb(45, 49, 56);
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
  box-shadow: none !important;
  border-radius: 0px;
  border-bottom: 1px solid rgb(217, 219, 224);
  padding: 22px 0px;

  &:focus-within {
    padding-bottom: 21px;
    border-bottom: ${props => '2px solid ' + props.theme.palette.primary.main} 
  }

  @media screen and (min-width: 1060px) {
    max-width: 335px;
    margin-left: 14px;
    margin-right: 14px;
  }
`;

export default AuthFormInput;