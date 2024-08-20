import styled, { keyframes } from 'styled-components';

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

const contentSlideIn = keyframes`
0% {
  transform: translateY(18%);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}
`;

const contentSlideOut = keyframes`
0% {
  transform: translateY(0);
  opacity: 1;
}
100% {
  transform: translateY(18%);
  opacity: 0;
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

export const StyledH1 = styled.h1`
font-family: var(--font-family);
text-align: center;
margin-bottom: 30px;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
letter-spacing: 0.1rem;
font-size: 4rem;
font-weight: 100;

&.animate {
  animation: ${slideOutToBottom} 1s ease-out forwards;
}

&.exit {
  animation: ${slideInFromBottom} 1s ease-out forwards;
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
export const StyledContainer = styled.section`

  display: flex;
  background-color: rgb(19, 15, 22);
  color: var(--white);


  .container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 80px;
    display: flex;
    flex-direction: column;
    gap: 80px;

     @media (max-width: 520px) {
      padding: 80px 4%;
     }

    @media (max-width: 350px) {
      width: 90%;
    }
  }
}
`;

export const StyledContent = styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
    opacity: 0;
    transform: translateY(18%);
    transition: opacity 1s ease-out, transform 1s ease-out;

    &.animate {
      animation: ${contentSlideIn} 1s ease-out forwards;
      transition-delay: 0.2s;
  
      @media (max-width: 900px) {
        transition-delay: 1s;
      }
    }

    &.exit {
      animation: ${contentSlideOut} 1s ease-out forwards;
      transition-delay: 0s;
    }
    
    @media (max-width: 950px) {
      flex-direction: column;
      align-items: center;
      gap: 60px;
    }
  }
`;
export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;

  @media (max-width: 950px) {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
    width: 100%;
  }

  .listItem {
    color: var(--white);
    cursor: pointer;
    border-radius: 5px;
    font-size: 0.9em;
    font-weight: 500;
    padding: 10px;
    width: 160px;
    text-align: center;

    @media (max-width: 950px) {
      font-size: 0.8em;
      width: 105px;
      padding: 0 10px;
    }
    
    @media (max-width: 950px) {
      padding: 0;
    }

    @media (max-width: 575px) {
      font-size: 0.7em;
      width: 90px;
    }
    
    @media (max-width: 520px) {
      font-size: 0.6em;
    }

    @media (max-width: 400px) {
      width: 80px;
    }

    &:hover {
      background-color: #333;
    }

    &.active {
      color: var(--blue-header);
      text-shadow: var(--blue-header) 0px 0px 5px;
      border-left: 4px solid var(--blue-header);

      @media (max-width: 950px) {
        border-left: none;
        border-bottom: 4px solid var(--blue-header);
      }
    }
  }
`;

export const StyledDescription = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 4%;
  background-color: rgb(19, 15, 22);
  border-radius: 5px;
  width: 100%;
  max-width: 750px;

  .text {
    @media (max-width: 950px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-right: 4%;
    }

    @media (max-width: 800px) {
      padding-right: 2%;
    }

    @media (max-width: 775px) {
      padding-right: 0;
    }

    @media (max-width: 763px) {
      align-items: center;
    }
  }
`;

export const StyledTitle = styled.h2`
  font-size: 1.3em;
  font-weight: bold;
  padding-left: 5px;
  border-left: 4px solid rgb(0, 162, 232);

  @media (max-width: 1065px) {
    font-size: 1.2em;
  }

  @media (max-width: 1015px) {
    font-size: 1.1em;
  }

  @media (max-width: 985px) {
    font-size: 1em;
  }

  @media (max-width: 950px) {
    font-size: 1.3em;
  }

  @media (max-width: 630px) {
    font-size: 1.2em;
  }

  @media (max-width: 560px) {
    font-size: 1.1em;
  }

  @media (max-width: 500px) {
    font-size: 1em;
  }

  @media (max-width: 450px) {
    font-size: 0.9;
  }
`;

export const StyledText = styled.p`
  font-size: 1em;
  font-weight: 500;
  margin-top: 40px;
  width: 90%;

  @media (max-width: 1100px) {
    font-size: 0.9em;
  }

  @media (max-width: 1080px) {
    width: 95%;
    font-size: 0.8em;
  }

  @media (max-width: 985px) {
    font-size: 0.7em;
  }

  @media (max-width: 950px) {
    text-align: flex-start;
    font-size: 1em;
    margin-top: 20px;
  }

  @media (max-width: 762px) {
    text-align: center;
  }
  @media (max-width: 630px) {
    font-size: 0.9em;
  }

  @media (max-width: 560px) {
    font-size: 0.8em;
  }
`;

export const StyledImage = styled.img`
  max-width: 250px;
  border-radius: 50%;
  height: 280px;
  box-shadow: var(--light-blue) 0px 0px 90px;

  @media (max-width: 1000px) {
    max-width: 220px;
    height:250px;
  }

  @media (max-width: 762px) {
    display: none;
  }
`;

export const StyledIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;

  @media (max-width: 950px) {
    justify-content: flex-start;
  }

  @media (max-width: 762px) {
    justify-content: center;
  }

  .icons {
    display: flex;
    width: 3.3rem;
    height: 3.3rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: rgb(46, 53, 72);

    @media (max-width: 1120px) {
      width: 3rem;
      height: 3rem;
    }

    @media (max-width: 550px) {
      width: 2.8rem;
      height: 2.8rem;
    }

    @media (max-width: 400px) {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

export const StyledIconImg = styled.img`
  width: 32px;
  height: 32px;

  @media (max-width: 1120px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 550px) {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 400px) {
    width: 25px;
    height: 25px;
  }
`;
