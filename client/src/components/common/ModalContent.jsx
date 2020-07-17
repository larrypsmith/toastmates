import styled from 'styled-components/macro';

const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    background-color: rgb(255, 255, 255);
    overflow-y: scroll;
    box-shadow: rgba(34, 34, 34, 0.15) 0px 2px 20px 0px;

    @media screen and (min-width: 1060px) {
        max-width: 435px;
        overflow: visible;
        height: auto;
        visibility: visible;
    }
`;

export default ModalContent;