import React from 'react';
import styled from 'styled-components/macro';
import Typography from '../common/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OrderDetail = ({ icon, text }) => {
  const textItems = text instanceof Array
    ? text
    : [text];
  
  return (
    <StyledOrderDetail>
      <IconContainer>
        <StyledFontAwesomeIcon icon={icon} size='lg' />
      </IconContainer>
      <div>
        {textItems.map((item, idx) => (
          <StyledTypography 
            key={idx}
            size='16px'
            weight='600'
          >
            {item}
          </StyledTypography>
        ))}
      </div>
    </StyledOrderDetail>
  )
};

export default OrderDetail;

const StyledOrderDetail = styled.div`
  margin-bottom: 32px;
  display: flex;
`;

const IconContainer = styled.div`
  width: 20px;
  height: 19px;
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 22px;

  &:last-child {
    margin-bottom: 0px;
  }

  @media screen and (max-width: 1059px) {
    color: white;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  @media screen and (max-width: 1059px) {
    color: white;
  }

`;