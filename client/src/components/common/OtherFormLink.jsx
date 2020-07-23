import React from 'react';
import styled from 'styled-components/macro';
import Typography from './Typography';

const OtherFormLink = ({ question, linkText, onClickLink }) => {
  return (
    <StyledOtherFormLink>
      <Question size='14px' weight={400}>{question}</Question>
      <LinkToOtherForm
        onClick={onClickLink}
        size='14px'
        weight={600}
      >
        {linkText}
      </LinkToOtherForm>
    </StyledOtherFormLink>
  );
};

export default OtherFormLink;

const StyledOtherFormLink = styled.div`
  display: none;
  width: 100%;
  text-align: center;
  padding-top: 24px;
  padding-bottom: 24px;
  border-top: 1px solid rgba(217, 219, 224, 0.5);

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    bottom: 0px;
    left: 0px;
  } 
`;

const Question = styled(Typography)`
  line-height: normal;
  margin-bottom: 10px;
`;

const LinkToOtherForm = ({ children, ...props }) => {
  return (
    <StyledLinkToOtherForm {...props}>
      {children}
    </StyledLinkToOtherForm>
  );
}

const StyledLinkToOtherForm = styled(Typography)`
  text-transform: uppercase;
  line-height: normal;
  color: rgb(0, 204, 153);
  margin-left: auto;
  cursor: pointer;
`;