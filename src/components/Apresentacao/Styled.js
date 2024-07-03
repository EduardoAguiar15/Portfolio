import styled from 'styled-components';
import fundo from '../../assets/imgs/fundo.png';

export const StyledHome = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Oi&display=swap');
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
  height: 95vh;

  .principal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1300px;
    width: 100%;

  .apresentacao {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    padding-left: 70px;

    .nome {
      span {
        font-size: 3.7rem;
      }
    }

    .especialidade {
      span {
        font-size: 2rem;
      }
    }

    h1 {
      color: white;
      font-size: 1.5rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      span {
        display: inline-block;
        font-family: "Oi", serif;
        font-weight: 600;
        font-style: normal;
      }

      span:hover {
        color: #0D6EFD;
      }
    }

    p {
      color: white;
    }

    .minhasRedes {
      display: flex;
      gap: 1rem;
      margin-left: 2px;

      a {
        color: white;
        text-decoration: none;

        .github,
        .linkedin,
        .instagram {
          cursor: pointer;
          height: 2.5rem;
          width: 2.5rem;
          border-radius: 5px;
          background-color: rgb(41, 40, 40); /* Fundo escuro ao redor */
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.5rem;

          .social-icon {
            width: 100%; /* Garante que a imagem ocupe todo o espaço */
            height: auto;
            border-radius: 50%;
            background-color: rgb(0, 162, 232); /* Fundo escuro ao redor */
            box-shadow: rgb(0, 162, 232) 0px 0px 10px;
          }
        }
      }
    }

    .button {
      margin-top: 20px;
      width: 30%;
      height: 2.6rem;
      background-color: rgb(0, 162, 232);
      border-radius: 0.6rem;
      font-size: 1.1rem;
      color: white;
      letter-spacing: 0.1rem;
      font-weight: 600;
      border: 0.2rem solid transparent;
      transition: 0.5s ease;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        box-shadow: rgb(0, 162, 232) 0px 0px 10px;
      }

      img {
        width: 12%;
      }
    }
  }

  .Centralizer {
    width: 85%;

    .EduardoImg {
      position: relative;
      width: 100%;
      height: 75vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url(${fundo});
      background-size: cover;
      background-position: center;
      animation: flutuar 2s infinite ease-in-out alternate;

      @keyframes flutuar {
        0% {
          top: 0;
        }
        100% {
          top: 30px;
        }
      }

      img {
        width: 23%; /* Ajuste conforme necessário */
        height: auto;
        z-index: 1;
      }
    }
  }
}
}
`;
