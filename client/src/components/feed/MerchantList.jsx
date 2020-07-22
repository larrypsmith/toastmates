import React from 'react';
import styled from 'styled-components/macro';
import MerchantListTitle from './MerchantListTitle';
import MerchantListItem from './MerchantListItem';

const MerchantList = ({ title, merchants }) => {
  return(
    <div>
      <GutterTop />
      <MerchantListTitle>{title}</MerchantListTitle>
      <MerchantListItemsContainer>
        {/* {merchants.map((merchant) => (
          <MerchantListItem merchant={merchant} key={merchant.id} />
        ))} */}
      </MerchantListItemsContainer>
    </div>
  );
}

export default MerchantList;

const GutterTop = styled.div`
  margin-left: -16px;
  margin-right: -16px;
  margin-bottom: 39px;
  width: calc(100% + 32px);
  height: 16px;
  background-color: #f7f7f8;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MerchantListItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-bottom: 64px;

  @media screen and (max-width: 767px) {
    padding-bottom: 80px;
  }
`;