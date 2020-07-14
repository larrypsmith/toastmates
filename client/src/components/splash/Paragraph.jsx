import styled from 'styled-components/macro';

const Paragraph = styled.p`
  font-size: 16px;
  letter-spacing: 0.14px;
  font-weight: 400;
  margin-bottom: 23px;
  margin-top: 8px;
  line-height: 26px;
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }

  @media screen and (min-width: 1060px) {
    margin-top: 13px;
  }
`;

export default Paragraph;