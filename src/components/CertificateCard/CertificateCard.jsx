import React from 'react';
import { Card, CourseImage, CourseTitle, CourseDescription, PdfButton } from './Styled';
import Button from '../Button/Button';

const CertificateCard = ({ item, isActive, refCard, buttonText }) => {
    return (
        <Card ref={refCard} className={isActive ? 'center-card' : 'side-card'}>
            <CourseImage src={item.img} alt={item.imgAlt} />
            <CourseTitle>{item.title}</CourseTitle>
            <CourseDescription>{item.description}</CourseDescription>
            <PdfButton isActive={isActive}>
                <Button word={buttonText} link={item.pdf} width="35%" height="2rem" size="0.7rem" />
            </PdfButton>
        </Card>
    );
};

export default CertificateCard;
