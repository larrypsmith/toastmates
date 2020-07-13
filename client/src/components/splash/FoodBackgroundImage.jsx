import styled from 'styled-components/macro';
import food from '../../images/hero-food.png';
import foodWithHand from '../../images/hero-food-with-hand.png';

const FoodBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 102;
  background-image: url(${food});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    background-image: url(${foodWithHand});
  }

  @media screen and (min-width: 1060px) {
    background-size: auto 140%;
  }
`;

export default FoodBackgroundImage;