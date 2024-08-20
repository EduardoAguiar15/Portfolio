import styled from 'styled-components';

export const StyledFooter = styled.footer`
display: flex;
background-color: var(--background-black);
height: 16vh;
align-items: center;
position: relative;

@media (max-height: 580px) {
    height: 100px;
}

    div{
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;

        @media (max-width: 790px) {
            height: 70%;
            justify-content: end;
        }
    }

    p{
        color: var(--white);

        @media (max-width: 790px) {
            margin: 0;
            font-size: 0.9rem;
        }

        @media (max-width: 550px) {
            font-size: 0.8rem;
        }

        @media (max-width: 360px) {
            font-size: 0.7rem;
        }
    }
    a {
        width: 38px;
        height: 38px;
        position: absolute;
        right: 120px;

        @media (max-width: 790px) {
            bottom: 45px;
            right: 50%;
            transform: translateX(50%);
        }
    }
    img{
        width: 38px;
        border-radius: 6px;
        cursor: pointer;
    }
`