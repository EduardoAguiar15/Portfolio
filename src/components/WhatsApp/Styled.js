import styled, { keyframes } from 'styled-components';

const pulseTrail = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.6;
  }
  70% {
    transform: translate(-50%, -50%) scale(1.6);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const StyledWhats = styled.div`
  position: fixed;
  width: 55px;
  height: 55px;
  bottom: 40px;
  right: 30px;
  z-index: 1000;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(37, 211, 102, 0.3) 0%,
      rgba(37, 211, 102, 1) 85%,
      transparent 90%     
    );
    transform: translate(-50%, -50%) scale(1);
    animation: ${pulseTrail} 2.3s infinite ease-out;
  }

  img {
    position: relative;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: block;
   
    &:hover {
      filter: hue-rotate(-15deg) saturate(160%) brightness(0.8);
    }
  }
`;
