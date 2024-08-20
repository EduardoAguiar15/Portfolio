import styled, { keyframes } from 'styled-components';

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-30%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(30%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutToLeft = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-15%);
    opacity: 0;
  }
`;

const slideOutToRight = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(15%);
    opacity: 0;
  } 
`;


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 0.25;
  }
  75% {
    opacity: 0.50;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledProjectCont = styled.div`
  display: flex;
  flex-direction: column;

  .projectsConteiner {
    display: flex;
    gap: 2.5rem;
    justify-content: center;
    flex-direction: ${({ applyStyles }) => (applyStyles ? 'row' : 'row-reverse')};

    @media (max-width: 930px) {
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: 600px) {
      gap: 1rem;
    }
  }

  .projectsImg, .projectsBtnText {
    &.left {
      animation: ${({ className }) =>
    className.includes('animate') ? slideInFromLeft : slideOutToLeft} 
        0.8s ease-out forwards;

      @media (max-width: 1000px) {
        opacity: 0;
        animation: ${({ className }) =>
    className.includes('animate') ? fadeIn : 'none'} 
          2s ease-out forwards;
      }
    }

    &.right {
      animation: ${({ className }) =>
    className.includes('animate') ? slideInFromRight : slideOutToRight} 
        0.8s ease-out forwards;

      @media (max-width: 1000px) {
        opacity: 0;
        animation: ${({ className }) =>
    className.includes('animate') ? fadeIn : 'none'} 
          2s ease-out forwards;
      }
    }
  }

  .projectsImg {
    height: auto;

    img {
      width: 500px;
      height: auto;
      border-radius: 20px;

      @media (max-width: 1280px) {
        width: 400px;
      } 

      @media (max-width: 930px) {
        width: 600px;
        height: auto;
      } 

      @media (max-width: 830px) {
        width: 550px;
      } 

      @media (max-width: 700px) {
        width: 500px;
      } 

      @media (max-width: 650px) {
        width: 400px;
      }

      @media (max-width: 470px) {
        width: 350px;
      }

      @media (max-width: 430px) {
        width: 300px;
      }

      @media (max-width: 330px) {
        width: 270px;
      }
    }
  }

  .projectsText {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 482px;

    @media (max-width: 1280px) {
      width: 430px;
    }

    @media (max-width: 930px) {
      width: 600px;
    }

    @media (max-width: 830px) {
      width: 550px;
    }

    @media (max-width: 700px) {
      width: 500px;
    } 

    @media (max-width: 650px) {
      width: 400px;
    }

    @media (max-width: 470px) {
      width: 350px;
    }

    @media (max-width: 430px) {
      width: 300px;
    }

    @media (max-width: 330px) {
      width: 270px;
    }

    h2 {
      color: var(--white);
      margin-top: 0;
      text-align: ${({ applyStyles }) => (applyStyles ? 'start' : 'end')};
      padding-left: ${({ applyStyles }) => (applyStyles ? '7px' : '0px')};
      border-left: ${({ applyStyles }) => (applyStyles ? '4px solid var(--light-blue)' : '0px')};
      padding-right: ${({ applyStyles }) => (applyStyles ? '0px' : '7px')};
      border-right: ${({ applyStyles }) => (applyStyles ? '0px' : '4px solid var(--light-blue)')};

      @media (max-width: 1280px) {
        margin-bottom: 10px;
      }

      @media (max-width: 930px) {
        font-size: 1.8rem;
      }

      @media (max-width: 650px) {
        margin-bottom: 10px

      }

      @media (max-width: 470px) {
        font-size: 1.5rem;
      }

      @media (max-width: 430px) {
        font-size: 1.2rem;
      }
    }

    p {
      margin-top: 0;
      color: var(--white);
      text-align: ${({ applyStyles }) => (applyStyles ? 'start' : 'end')};

      @media (max-width: 1280px) {
        font-size: 0.9rem;
      }

      @media (max-width: 930px) {
        font-size: 1.1rem;
      }

      @media (max-width: 700px) {
        font-size: 1.2rem;
      }

      @media (max-width: 650px) {
        font-size: 1rem;
      }

      @media (max-width: 470px) {
        font-size: 0.8rem;
      }

      @media (max-width: 430px) {
        font-size: 0.7rem;
        margin-bottom: 0;
      }

      @media (max-width: 410px) {
      }
    }
  }

  .projectsBtn {
    display: flex;
    gap: 1.5rem;
    justify-content: ${({ applyStyles }) => (applyStyles ? 'flex-start' : 'flex-end')};

  }
`;
