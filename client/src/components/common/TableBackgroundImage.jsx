import styled from 'styled-components/macro';
import table from '../../images/hero-table.png';

const TableBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
  background-image: url(${table});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  background-color: transparent;

  @media screen and (min-width: 1500px) {
    background-position-y: 70%;
  }
`;

export default TableBackgroundImage;