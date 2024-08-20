import styled from 'styled-components';

export const StyledAbout = styled.section`
  background-color: var(--background-black);
  padding-top: 70px;
  padding-bottom: 70px;

  .conteinerAbout{
    max-width: 1300px;
    margin: 0 auto;
  }

  .aboutMeTitle {
    font-family: var(--font-family);
    font-weight: 100;
    letter-spacing: 0.1rem;
    display: flex;
    height: 8vh;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 4rem;
    color: var(--white);
    border-left: 5px solid rgb(0, 162, 232);
    padding-left: 10px;
    opacity: 0;
    transform: translateY(-18%);
    transition: opacity 1s ease-out, transform 1s ease-out;

    @media (max-width: 960px) {
      margin: 0;
      font-size: 3.3rem;
      height: 6vh;
    }

    @media (max-width: 900px) {
      margin: 20px 0;
      border: none;
      padding: 0;
    }

    @media (max-width: 460px) {
      font-size: 3rem;
    }
  }

  .contentAbout {
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 1250px) {
      justify-content: space-evenly;
    }

    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &.animate .aboutMeTitle {
      transform: translateY(0);
      opacity: 1;
      transition-delay: 0s;

      @media (max-width: 900px) {
        transition-delay: 1s; 
      }
    }

    &.exit .aboutMeTitle {
      transform: translateY(-18%);
      opacity: 0;
      transition-delay: 0s;
    }

    &.animate .aboutText {
      transform: translateY(0);
      opacity: 1;
      transition: opacity 1s ease-out, transform 1s ease-out;
      transition-delay: 0.2s;

      @media (max-width: 900px) {
        transition-delay: 1s; 
      }
    }

    &.exit .aboutText {
      transform: translateY(18%);
      opacity: 0;
      transition: opacity 1s ease-out, transform 1s ease-out;
      transition-delay: 0s;
    }

    &.animate .aboutMe img {
      transform: translateX(0);
      opacity: 1;
      transition: opacity 1s ease-out, transform 1s ease-out;
      transition-delay: 0.3s;
    }

    &.exit .aboutMe img {
      transform: translateX(-18%);
      opacity: 0;
      transition: opacity 1s ease-out, transform 1s ease-out;
      transition-delay: 0s;
    }
    
    .aboutText {
      width: 40%;
      opacity: 0;
      transform: translateY(18%);
      transition: opacity 1s ease-out, transform 1s ease-out;

      @media (max-width: 900px) {
        width: 60%;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      @media (max-width: 740px) {
        width: 70%;
      }

      p {
        flex: 1;
        font-size: 1rem;
        font-weight: lighter;
        color: var(--white);

        @media (max-width: 1000px) {
          font-size: 0.9rem;
        }

        @media (max-width: 960px) {
          margin: 10px 0;
        }

        @media (max-width: 900px) {
          margin: 15px 0;
          text-align: center;
          font-size: 1rem;
        }

        @media (max-width: 460px) {
          font-size: 0.9rem;
        }

        @media (max-width: 400px) {
          font-size: 0.8rem;
        }
      }
    }

    .aboutMe {
      width: 30%;
      display: flex;
      justify-content: center;

      @media (max-width: 1130px) {
        width: 35%;
      }

      @media (max-width: 1050px) {
        width: 40%;
      }

      @media (max-width: 900px) {
        width: 60%;
      }

      img {
        width: 100%;
        border-radius: 10%;
        border-bottom: 10px solid var(--light-blue);
        border-left: 10px solid var(--light-blue);
        opacity: 1;
        transform: translateX(-18%);
        transition: opacity 1s ease-out, transform 1s ease-out;

        @media (max-width: 900px) {
          border: none;
          border-radius: 5%;
        }
      }
    }
  }
`;
