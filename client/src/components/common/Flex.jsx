import styled, { css } from 'styled-components/macro';

const Flex = styled.div`
  ${({ parent, direction, justify, align }) => (parent &&
    css`
      position: relative;
      display: flex;
      flex-direction: ${(direction && direction[0]) || 'unset'};
      justify-content: ${(justify && justify[0]) || 'unset'};
      align-items: ${(align && align[0]) || 'unset'};

      @media screen and (min-width: 768px) {
        flex-direction: ${(direction && direction[1]) || 'unset'};
        justify-content: ${(justify && justify[1]) || 'unset'};
        align-items: ${(align && align[1]) || 'unset'};
      } 

      @media screen and (min-width: 1060px) {
        flex-direction: ${(direction && direction[2]) || 'unset'};
        justify-content: ${(justify && justify[2]) || 'unset'};
        align-items: ${(align && align[2]) || 'unset'};
      } 
    `
  )}

  ${({ child, align }) => (child && 
    css`
      align-self: ${align};
    `
  )}
`;

export default Flex;