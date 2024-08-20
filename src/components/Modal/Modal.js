import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 70px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-in;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
  height: 100px;
  position: relative;

  @media (max-width: 350px) {
    width: 250px;
    height: 90px;
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 10px;
`;

const ProgressBar = styled.div`
  height: 5px;
  background-color: ${props => props.success ? '#4CAF50' : '#f44336'};
  width: ${props => props.progress}%;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: width 0.1s linear;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const Modal = ({ message, isSuccess, onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const duration = 5000;
    const updateInterval = 50;

    const intervalId = setInterval(() => {
      setProgress(prev => {
        if (prev <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - (100 / (duration / updateInterval));
      });
    }, updateInterval);

    const timeoutId = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [onClose]);

  return (
    <ModalBackdrop>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <IconWrapper>
          {isSuccess ? <CheckCircleIcon color="success" fontSize="large" /> : <CancelIcon color="error" fontSize="large" />}
        </IconWrapper>
        <p>{message}</p>
        <ProgressBar success={isSuccess} progress={progress} />
      </ModalContent>
    </ModalBackdrop>
  );
};

export default Modal;
