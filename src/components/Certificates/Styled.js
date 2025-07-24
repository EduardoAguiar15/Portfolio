import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-300px);
  }
  to {
    opacity: 1;
  }
`;

const slideInFromBottom = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
    }
`;

const slideOutToBottom = keyframes`
    0% {
      transform: translateY(-100%);
      opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
        }
`;

export const StyledCertificates = styled.section`
  background-color: rgb(19, 15, 22);
  color: var(--white);
  height: auto;
  padding: 80px 4%;
  display: flex;
  justify-content: center;
`;

export const CertificatesClass = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    gap: 2.5rem;
    flex-direction: column;
    padding-bottom: 40px;
`;

export const ContainerCertificates = styled.div`
  overflow: hidden;
  min-height: 670px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 989.1px;

  @media (max-width: 1280px) {
    width: 960px;
  }
  @media (max-width: 1251px) {
    width: 900px;
  }
  @media (max-width: 1031px) {
    width: 550px;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } 
  @media (max-width: 891px) {
    width: 500px;
  }
  @media (max-width: 801px) {
    width: 470px;
  }
  @media (max-width: 648px) {
    width: 400px;
    }
  @media (max-width: 405px) {
    min-height: 500px;
    width: 350px;
  }
  @media (max-width: 361px) {
    width: 290px;
  }
`;

export const StyledH1 = styled.h1`
  font-family: var(--font-family);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 4rem;
  font-weight: 100;
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: 0.1rem;
  flex-grow: 1;

&.animate {
  animation: ${slideOutToBottom} 2s ease-out forwards;
}

&.exit {
  animation: ${slideInFromBottom} 2s ease-out forwards;
}

  @media (max-width: 640px) {
    font-size: 3.4rem;
  }

  @media (max-width: 380px) {
    font-size: 3rem;
  }

  @media (max-width: 320px) {
    font-size: 2.5rem;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  &.animate {
    animation: ${fadeIn} 1.2s ease-out forwards;
  }

      @media (max-width: 1031px) {
          gap: 30px;
      }

      @media (max-width: 900px) {
        transition-delay: 1s;
        gap: 0;
      }
`;
export const CardContainer = styled.div`
      display: flex;
      gap: 20px;

      @media (max-width: 1280px) {
      gap: 10px;
      }
      @media (max-width: 1250px) {
      gap: 0;
      }
      @media (max-width: 1031px) {
         display: flex;
        gap: 70px;
         justify-content: center;
      }
      @media (max-width: 700px) {
        gap: 65px;
      }
`;

export const StyledH1Image = styled.img`
  width: 50px;
  height: 50px;

  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 380px) {
    width: 35px;
    height: 35px;
    }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: 2px solid var(--blue-header);
  color: var(--white);
  border-radius: 8px;
  padding: 10px 16px;
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background-color: var(--blue-header);
    color: #fff;
    }
    &.prev {
    left: 0;
    transform: translate(-70%, -50%);
  }

  &.next {
    right: 0;
    transform: translate(70%, -50%);
  }

  @media (max-width: 649px) {  
    &.prev {
    transform: translate(-50%, -50%);
    }

    &.next {
    transform: translate(50%, -50%);
    }
  }

  @media (max-width: 451px) {
    &.prev {
    transform: translate(0%, -50%);
    }
    &.next {
    transform: translate(0%, -50%);
    }
  }
`;
