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

const scrollDown = keyframes`
  0%, 20% {
    transform: translateY(-3px);
  }
  40% {
    transform: translateY(0px);
  }
  60% {
    transform: translateY(-3px);
  }
  80% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(-3px);
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
color: var(--white);
opacity: 0;
transition: opacity 0.9, transform 0.9;

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

export const StyledProject = styled.section`
  .projectsContent {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    gap: 6rem;
    flex-direction: column;
    padding-bottom: 40px;
    
    @media (max-width: 470px) {
      gap: 6rem;
    }
  }


`;

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  height: 5vh;

  button {
    border-radius: 10px;
    color: var(--white);
    text-shadow: var(--light-blue) 0px 0px 3px;
    cursor: pointer;
    background-color: var(--black-button);
    width: 103px;
    height: 100%;
    font-size: 0.8rem;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    padding: 0px;
    gap: 4px;
    border: 0.2rem solid transparent;
    letter-spacing: 0.02rem;
    text-decoration: none;
}
  }

  button:hover {
    transform: scale(1.1);
  }

  .arrow {
    position: relative;
    right: 3px;
    animation: ${scrollDown} 1s infinite;
  }
`;
