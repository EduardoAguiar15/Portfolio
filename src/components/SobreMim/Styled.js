import styled from 'styled-components';

export const StyledAbout = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Oi&display=swap');
    .aboutMeTitle {
        font-size: 3.8rem;
        display: flex;
        color: white;
        justify-content: center;
        font-family: "Oi", serif;
        font-weight: 600;
        font-style: normal;
    }

    .contentAbout {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 20px;

        .aboutText{
            width: 40%;

            h2{
                font-size: 1.6rem;
            }
            h2:first-of-type {
                margin: 0;
                color: white;
}

            h2:last-of-type {
                margin-top: 0;
                color: rgb(0, 162, 232);
            }
            }
            p{
                color: white;
            }
        }
    }

    .sobre-mim {
        width: 25%;
        display: flex;
        justify-content: center;

        img{
            width: 100%;
            border-radius: 10%;
            border-bottom: 10px solid rgb(0, 162, 232);
            border-left: 10px solid rgb(0, 162, 232);
        }
    }

    .sobreImg {
        width: 150px; /* Ajuste o tamanho da imagem conforme necessário */
        height: auto;
    }

    p {
        flex: 1;
    }
`;
