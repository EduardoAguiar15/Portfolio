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
  width: 47px;
  height: 47px;

   @media (max-width: 640px) {
     width: 37px;
     height: 37px;
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
color: var(--white);
letter-spacing: 0.1rem;
font-size: 3.5rem;
font-weight: 100;

&.animate {
  animation: ${slideOutToBottom} 1s ease-out forwards;
}

&.exit {
  animation: ${slideInFromBottom} 1s ease-out forwards;
}

 @media (max-width: 640px) {
   font-size: 3rem;
}

 @media (max-width: 320px) {
   font-size: 2.5rem;
 }
`;

export const StyledContact = styled.section`
padding: 80px 4%;
}

form {
    max-width: 550px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    margin-top: 40px;
    align-items: center;

    &.animate {
      animation: ${contentSlideIn} 1s ease-out forwards;
      transition-delay: 0.2s;
    }
    
    &.exit {
      animation: ${contentSlideOut} 1s ease-out forwards;
      transition-delay: 0s;
    }
}

form input,
form textarea {
    width: 90%;
    background-color: #242424;
    border: 0;
    outline: 0;
    padding: 20px 15px;
    border-radius: 15px;
    font-size: 1.1rem;

    @media (max-width: 450px) {
        font-size: 0.9rem;
    }
}

form textarea {
    resize: none;
    min-height: 200px;
}

form .btn-enviar {
    margin-top: 20px;
    text-align: center;
}

form .btn-enviar input {
    width: 120px;
    background-color: #00FF08;
    color: #000;
    font-weight: 700;
    cursor: pointer;
}

.email-error {
    color: var(--white);
  }
`