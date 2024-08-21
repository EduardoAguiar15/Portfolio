import styled from 'styled-components';

export const StyledHome = styled.main`
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
  height: 95vh;
  padding-bottom: 40px;
  animation: transition 0.3s forwards;
  
  @media (max-height: 680px) {
    height: 610px;
  }

  @keyframes transition {
    0% {
      transform: translateX(-30px);
      opacity: 0;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  .name {
    font-family: 'Mouse Memoirs';
    color: var(--white);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    font-weight: 100;
    letter-spacing: 0.1rem;
    font-size: 5.5rem;

    @media (max-height: 680px) {
      margin: 0;
    }

    @media (max-width: 1240px){
      font-size: 5.2rem;
    }      

    @media (max-width: 1100px){
      font-size: 5rem;
    } 

    @media (max-width: 1060px){
      font-size: 4.5rem;
    }

    @media (max-width: 980px){
      font-size: 4rem;
    }

    @media (max-width: 900px){
      font-size: 5rem;
      margin-top: 0;
    }
    
     @media (max-width: 480px) {
       font-size: 4.5rem;
     }

    @media (max-width: 435px) {
      font-size: 4rem;
    }

    @media (max-width: 390px) {
      font-size: 3.5rem;
    }

    @media (max-width: 345px) {
      font-size: 3rem;
    }

    .button{
      width: 30%;
    }
  }

  .scroll {
    font-weight: bold;
    letter-spacing: 2px;
    display: flex;
    height: 52px;
    position: absolute;
    bottom: 1rem;

    a {
      height: 25px;
      display: flex;
      
      &:hover {
        cursor: pointer;
      }
    }

    p {
      height: 24px;
      color: var(--white);
      margin: 0;

      @media (max-width: 370px) {
        font-size: 0.8rem;
      }
    }

    img {
      height: 24px;
      animation: scroll-down 3s infinite forwards;
    }
  }

  @keyframes scroll-down {
    0% {
      transform: translateY(-4px);
      opacity: 1;
    }
    100% {
      transform: translateY(4px);
      opacity: 0;
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1300px;
    width: 76%;

    @media (max-width: 1370px) {
      width: 80%;
    }

    @media (max-width: 1310px) {
      width: 84%;
    }

    @media (max-width: 1185px) {
      width: 87%;
    }

    @media (max-width: 900px) {
      justify-content: center;
      padding-top: 60px;
    }
  }

  .presentation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 40%;

    @media (max-width: 1185px) {
      width: 41.5%;
    }

    @media (max-width: 950px) {
      width: 45%;
    }


    @media (max-width: 900px) {
      width: 80%;
      align-items: center;
      padding: 0;
    }

    @media (max-width: 550px) {
      width: 85%;
    }

    @media (max-width: 515px) {
      width: 90%;
    }

    @media (max-width: 486px) {
      width: 95%;
    }

    .specialty {
      color: var(--white);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 10px 0;

      @media (max-width: 1000px) {
        margin: 0;
      }

      @media (max-width: 900px) {
        text-align: center;
      }
      span {
        font-family: var(--font-family);
        font-weight: 100;
        letter-spacing: 0.1rem;
        font-size: 2.4rem;
        display: inline-block;

        @media (max-width: 1060px) {
          font-size: 2rem;
        }

        @media (max-width: 980px) {
          font-size: 1.8rem;
          margin: 0;
        }

        @media (max-width: 900px) {
          font-size: 2.2rem;
          margin: 10px 0;
          text-shadow: var(--light-blue) 0px 0px 5px;
          color: var(--light-blue);
        }

        @media (max-width: 480px) {
          font-size: 2rem;
        }

        @media (max-width: 435px) {
          font-size: 1.8rem;
        }

        @media (max-width: 390px) {
          font-size: 1.6rem;
        }

        @media (max-width: 345px) {
          font-size: 1.3rem;
        }

      }

      .cursor {
        display: inline-block;
        font-size: 2.4rem;
        margin-left: 5px; 
        animation: blink 0.7s steps(1) infinite;
        text-shadow: none;
       
        @media (max-width: 1060px) {
          font-size: 2rem;
        }

        @media (max-width: 980px) {
          font-size: 1.8rem;
        }

        @media (max-width: 900px) {
          font-size: 2.2rem;
        }

        @media (max-width: 480px) {
          font-size: 2rem;
        }

        @media (max-width: 435px) {
          font-size: 1.8rem;
        }

        @media (max-width: 390px) {
          font-size: 1.6rem;
        }

        @media (max-width: 345px) {
          font-size: 1.3rem;
        }

        &.done {
          margin-left: 5px;
        }
      }
    }
  }

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }

  .text {
    font-size: 1rem;
    font-weight: 500;
    color: var(--white);

    @media (max-width: 1100px) {
      font-size: 0.9rem;
    }

    @media (max-width: 900px) {
      width: 80%;
      font-size: 1rem;
      text-align: center;
    }

    @media (max-width: 785px) {
      width: 90%;
    }

    @media (max-width: 640px) {
      width: 100%;
    }

    @media (max-width: 520px) {
      width: 90%;
    }

    @media (max-width: 460px) {
      font-size: 0.8rem;
    }
  }

  .myNetworks {
    display: flex;
    gap: 1rem;
    margin-left: 2px;

    @media (max-width: 900px) {
      margin: 10px 0;
      justify-content: center;
    }
    a {
      color: var(--white);
      text-decoration: none;
    }

    .github,
    .linkedin,
    .instagram {
      cursor: pointer;
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 5px;
      background-color: var(--black-button);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;

      .social-icon {
        width: 100%;
        height: auto;
        border-radius: 50%;
        background-color: var(--light-blue);
        box-shadow: var(--light-blue) 0px 0px 10px;
      }
    }
  }

  .centralizerContent {
    width: 54.5%;

    @media (max-width: 1380px) {
      width: 50%;
    }

    @media (max-width: 950px) {
      width: 45%;
    }

    @media (max-width: 900px) {
      display: none;
    }
  }

  .EduardoImg {
    position: relative;
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    animation: flutuar 2s infinite ease-in-out alternate;

    @keyframes flutuar {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(30px);
      }
    }

    img {
      width: 70%;
      height: auto;
      z-index: 1;

      @media (max-width: 1390px) {
        width: 75%;
      }

      @media (max-width:1320px) {
        width: 80%;
      }

      @media (max-width:1185px) {
        width: 84%;
      }
      
      @media (max-width:1050px) {
        width: 92%;
      }

      @media (max-width:950px) {
        width: 100%;
      }
    }
  }
`;
