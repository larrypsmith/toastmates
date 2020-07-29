import React from 'react';
import styled from 'styled-components/macro';
import Typography from './Typography';

const DesktopDeliveryAddressBar = ({ isHidden, ...props}) => {
  if (isHidden) return null;
  return (
    <StyledDesktopDeliveryAddressBar {...props}>
      <Container>
        <ContentContainer>
          <TextContainer>
            <DeliveryMethod>
              <DeliveryMethodTypography
                size='14px'
                weight={500}
              >
                Delivery
              </DeliveryMethodTypography>
              <DeliveryMethodUnderline />
            </DeliveryMethod>
            <Pipe />
            <Address />
          </TextContainer>
        </ContentContainer>
      </Container>
    </StyledDesktopDeliveryAddressBar>
  )
};

export default DesktopDeliveryAddressBar;

const StyledDesktopDeliveryAddressBar = styled.div`
  position: sticky;
  top: 72px;
  width: 100%;
  height: 70px;
  background-color: rgb(255, 255, 255);
  z-index: 300;
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);

  @media screen and (max-width: 1059px) and (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const Container = styled.div`
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin: 0px auto;
`;

const ContentContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1 1 0%;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  opacity: 1;
  transition: all 150ms ease-in-out 0s;
`;

const DeliveryMethod = styled.div`
  padding-right: 17px;
  position: relative;
`;

const DeliveryMethodTypography = styled(Typography)`
  font-weight: 500;
  line-height: normal;
  color: rgba(0, 0, 0, 0.4);
  margin: 0px;
  padding: 0px;
`;

const DeliveryMethodUnderline = styled.div`
  position: absolute;
  bottom: -8px;
  left: 0px;
  width: 100%;
  height: 2px;
  max-width: 51px;
  background-color: rgb(0, 204, 153);
  transform: translateX(0px);
  transition:
    max-width 150ms cubic-bezier(0.86, 0, 0.07, 1) 0s,
    transform 150ms linear 0s;
`;

const Pipe = styled.div`
  height: 30px;
  width: 1px;
  margin-right: 17px;
  background: rgba(217, 219, 224, 0.5);
`;

const Address = () => (
  <StyledAddress>
    <LocationIcon />
    <AddressText />
  </StyledAddress>
);

const StyledAddress = styled.div`
  padding-right: 17px;
  position: relative;
  display: flex;
`;

const LocationIcon = () => (
  <StyledLocationIcon width='14' height='17'>
    <g fill='none' fillRule='evenodd'>
      <path
        d='M7 10a3 3 0 110-6 3 3 0 010 6zm0-1a2 2 0 100-4 2 2 0 000 4z'
        fill='#8F95A3'
      ></path>
      <path
        d="M 7 16.362 c 4.35 -3.483 6.5 -6.616 6.5 -9.362 C 13.5 3.324 10.638 0.5 7 0.5 A 6.5 6.5 0 0 0 0.5 7 c 0 2.746 2.15 5.879 6.5 9.362 Z"
        stroke='rgb(143, 149, 163)'
      ></path>
    </g>
  </StyledLocationIcon>
);

const StyledLocationIcon = styled.svg`
  margin-right: 17px;
  overflow: visible;

  @media screen and (min-width: 768px) {
    margin-right: 8px;
  }
`

const AddressText = () => (
  <StyledAddressText>
    <AddressTextTypography
      weight={500}
      size='15px'
    >
      3601 Lyon St
    </AddressTextTypography>
  </StyledAddressText>
);

const StyledAddressText = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  opacity: 1;
  max-width: 142px;
  will-change: max-width;
  overflow: hidden;
  transition: max-width 150ms linear 0s, opacity 150ms linear 0s;
`;

const AddressTextTypography = styled(Typography)`
  line-height: normal;
  margin: 0px;
  color: rgba(0, 0, 0, 0.4);
`;