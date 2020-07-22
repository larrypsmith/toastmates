import React from 'react';
import styled from 'styled-components/macro';
import Typography from '../common/Typography';

const MerchantListTitle = ({ children }) => (
  <StyledMerchantListTitle>
    <ListTitleUnderline />
    <ListTitleText size='21px' weight={600}>{children}</ListTitleText>
  </StyledMerchantListTitle>
);

const StyledMerchantListTitle = styled.div`
  position: relative;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(217,219,224,0.5);
  align-items: flex-end;
  
  @media screen and (min-width: 768px) {
    padding-bottom: 16px;
  }
`;

const ListTitleUnderline = styled.div`
  position: absolute;
  top: 2px;
  left: calc(0% - 0px);
  width: 32px;
  height: 100%;
  z-index: 200;
  border-bottom: 2px solid rgba(0,0,0,0.9);
  transition: left 300ms cubic-bezier(0.86,0,0.07,1);
`;

const ListTitleText = styled(Typography)`
  letter-spacing: -0.5px;
  opacity: 0.9;
  line-height: normal;
`;

export default MerchantListTitle;