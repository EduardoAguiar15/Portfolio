import styled from 'styled-components';

export const StyledButton = styled.a`
    margin-top: 20px;
    border-radius: 9999px;
    background-color: var(--light-blue);
    color: var(--white);
    letter-spacing: 0.1rem;
    font-weight: 600;
    border: 0.2rem solid transparent;
    transition: 0.5s ease;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => width || '25%'};
    height: ${({ height }) => height || '2.4rem'};
    font-size: ${({ size }) => size || '0.8rem'};

    &:hover {
        box-shadow: var(--light-blue) 0px 0px 10px;
        cursor: pointer;
    }

    @media (max-width: 1020px) {
        font-size: ${({ size }) => size || '0.7rem'};
    }

    @media (max-width: 1110px) {
        width: 35%;
        font-size: 0.8rem;
    }

    @media (max-width: 900px) {
        width: 25%;
    }

    @media (max-width: 560px) {
        width: 30%;
    }

    @media (max-width: 430px) {
        width: 35%;
    }

    @media (max-width: 410px) {
        font-size: 0.7rem;
    }
`;

export const ButtonElement = styled(StyledButton).attrs({ as: 'button' })`
    border: none;
    text-align: center;
    width: '25%';
    height: '2.4rem';
    font-size: '0.9rem';

    @media (max-width: 1110px) {
        width: 35%;
        font-size: 0.7rem;
    }

    @media (max-width: 900px) {
        width: 25%;
    }

    @media (max-width: 560px) {
        width: 30%;
    }

    @media (max-width: 430px) {
        width: 35%;
    }

    @media (max-width: 375px) {
        font-size: 0.6rem;
    }
`;
