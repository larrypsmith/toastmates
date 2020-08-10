import React from 'react';
import styled from 'styled-components/macro';
import ExitModalButton from '../common/ExitModalButton';
import Typography from '../common/Typography';
import OrderDetail from './OrderDetail';
import {
  faStore,
  faMapMarkerAlt,
  faReceipt
} from '@fortawesome/free-solid-svg-icons';
import useCloseModal from '../../hooks/useCloseModal';
import { CREATE_ORDER } from '../../mutations';
import { useMutation } from '@apollo/client';

const ReviewOrderModal = ({ items, merchantName, ...props }) => {
  const closeModal = useCloseModal();
  debugger
  const [createOrder, { data }] = useMutation(CREATE_ORDER);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    e.stopPropagation();

    debugger
    createOrder({
      variables: {
        items: Object.values(items)
      }
    })
  }
  
  return (
    <StyledReviewOrderModal {...props}>
      <Padding>
        <Container>
          <ExitModalButtonContainer>
            <ExitModalButton />
          </ExitModalButtonContainer>
        </Container>
        <CheckmarkIconContainer>
          <StyledSVG viewBox='0 0 52 52'>
            <g fill='currentcolor' fillRule='evenodd'>
              <path d='M13.984 24.482l1.986-1.986 7.66 7.66 20.144-20.144 1.986 1.986-22.13 22.13z' />
              <path d='M46.062 11.413l-1.638 1.639C40.384 6.785 33.343 2.636 25.333 2.636c-12.535 0-22.697 10.162-22.697 22.697 0 12.535 10.162 22.697 22.697 22.697 12.535 0 22.697-10.162 22.697-22.697 0-3.33-.717-6.493-2.006-9.343l1.705-1.704a24.865 24.865 0 012.57 11.047C50.3 39.122 39.123 50.3 25.334 50.3 11.544 50.3.366 39.122.366 25.333.366 11.544 11.544.366 25.333.366c8.635 0 16.246 4.384 20.73 11.047z' />
            </g>
          </StyledSVG>
        </CheckmarkIconContainer>
        <StyledHeader>
          <Header size='28px' weight='600'>
            Review your order
          </Header>
          <Paragraph size='16px' color='secondary'>
            If something doesn't look right,
            you can go back and make changes.
          </Paragraph>
        </StyledHeader>
        <OrderInformationContainer>
          <OrderDetail
            icon={faStore}
            text={`Delivery from ${merchantName}`}
          />
          <OrderDetail
            icon={faMapMarkerAlt}
            text='3601 Lyon St'
          />
          <OrderDetail
            icon={faReceipt}
            text={Object.values(items && items).map(({ item, quantity}) => (
              `${quantity} x ${item.name}`
            ))}
          />
        </OrderInformationContainer>
        <OrderButtonsContainer>
          <EditOrderButton
            uppercase
            size='12px'
            weight='600'
            onClick={closeModal}
          >
            Edit Order
          </EditOrderButton>
          <PlaceOrderButton
            onClick={handlePlaceOrder}
          >
            Place Order
          </PlaceOrderButton>
        </OrderButtonsContainer>
      </Padding>
    </StyledReviewOrderModal>
  );
};

export default ReviewOrderModal;

const StyledReviewOrderModal = styled.div`
  @media screen and (min-width: 1060px) {
    height: calc(100% - 72px);
  }

  @media screen and (min-width: 1060px) {
    width: 460px;
    max-height: 690px;
    max-width: 560px;
    visibility: visible;
    overflow: hidden;
  }

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  box-shadow: rgba(34, 34, 34, 0.15) 0px 2px 20px 0px;
  background: transparent;
`;

const Padding = styled.div`
  @media screen and (min-width: 1060px) {
    padding-top: 32px;
    padding-bottom: 24px;
    background: rgb(255, 255, 255);
  }

  padding-left: 32px;
  padding-right: 32px;
  padding-top: 62px;
  padding-bottom: 62px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  background: rgba(37, 163, 170, 0.9);
`;

const Container = styled.div`
  position: relative;
`;

const ExitModalButtonContainer = styled.div`
  @media screen and (min-width: 1060px) {
    display: block;
    height: auto;
    margin-left: -36px;
    margin-right: -36px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding-top: 0px;
    height: 88px;
    border-bottom: none;
    padding-left: 36px;
    padding-right: 36px;
  }

  @media screen and (min-width: 768px) {
    margin-left: -24px;
    margin-right: -24px;
    padding-left: 24px;
    padding-right: 24px;
  }

  margin-left: -16px;
  margin-right: -16px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 100000;
  height: auto;
  display: none;
  padding: 0px;
`;

const CheckmarkIconContainer = styled.div`
  @media screen and (min-width: 1060px) {
    width: 52px;
    height: 52px;
  }

  width: 32px;
  height: 32px;
  margin-bottom: 18px;
`;

const StyledSVG = styled.svg`
  @media screen and (min-width: 1060px) {
    width: 52px;
    height: 52px;
    color: rgb(0, 204, 153);
  }

  width: 32px;
  height: 32px;
  color: rgb(255, 255, 255);
`;

const StyledHeader = styled.header`
  padding-bottom: 32px;
  position: relative;
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
`;

const Header = styled(Typography)`
  @media screen and (max-width: 1059px) {
    color: white;
  }
`;

const Paragraph = styled(Typography)`
  @media screen and (max-width: 1059px) {
    color: white;
  }

  margin-top: 6px;
`;

const OrderInformationContainer = styled.div`
  overflow-y: auto;
  padding-top: 34px;
  flex-grow: 1;
`;

const OrderButtonsContainer = styled.div`
  align-self: flex-end;
  width: 100%;
  position: relative;
  padding-top: 10px;
`;

const EditOrderButton = styled(Typography)`
  margin-bottom: 24px;
  color: white;
  text-align: center;

  @media screen and (min-width: 1060px) {
    color: rgb(0, 204, 153);
    background: linear-gradient(rgba(238, 238, 238, 0), rgb(255, 255, 255));
  }
`;

const PlaceOrderButton = styled.button`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  cursor: pointer;
  text-align: center;
  height: 56px;
  color: rgb(0, 204, 153);
  background-color: rgb(255, 255, 255);
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  padding: 0px;
  margin: 0px;
  outline: none;
  transition: background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s;
  border-radius: 28px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: rgb(217, 219, 224);

  @media screen and (min-width: 1060px) {
    color: rgb(255, 255, 255);
    background-color: rgb(0, 204, 153);
    border-width: initial;
    border-style: none;
    border-color: initial;
  }
`;