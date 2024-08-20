import React from 'react';
import { StyledButton, ButtonElement } from './Styled';

function Button({ word, link, onClick, type, width, height, size }) {
    if (link) {
        return (
            <StyledButton href={link} target='_blank' width={width} height={height} size={size}>
                {word}
            </StyledButton>
        );
    }

    return (
        <ButtonElement onClick={onClick} type={type} width={width} height={height} size={size}>
            {word}
        </ButtonElement>
    );
}

export default Button;
