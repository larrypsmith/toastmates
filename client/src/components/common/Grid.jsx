import styled from 'styled-components/macro';

const Grid = styled.div`
  display: grid;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Grid;