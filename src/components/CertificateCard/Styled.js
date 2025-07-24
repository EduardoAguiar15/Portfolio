import styled from 'styled-components';

export const Card = styled.div`
  background-color: #1f1a24;
  height: 520px;
  flex-grow: 1;
  border-radius: 10px;
  padding: 10px 10px 20px 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transform: scale(1);
  box-shadow: 0 0 35px rgba(0, 162, 232, 0.6);

  @media (max-width: 1251px) {
    height: 555px;
  }
  @media (max-width: 891px) {
    height: 515px;
  }
  @media (max-width: 481px) {
    transform: scale(0.8);
  }
  @media (max-width: 361px) {
    transform: scale(0.7);
  }

  &.side-card {
    transform: scale(0.8);
    filter: blur(1px);
    opacity: 0.6;

    @media (max-width: 1031px) {
      opacity: 1;
      filter: blur(0);
    }
    @media (max-width: 481px) {
      transform: scale(0.7);
    }
  }
`;

export const CourseImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
`;

export const CourseTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0;
  color: var(--blue-header);

  @media (max-width: 1031px) {
    font-size: 1.5rem;
  }
  @media (max-width: 648px) {
    font-size: 1.2rem;
  }
  @media (max-width: 481px) {
    font-size: 1.3rem;
  }
  @media (max-width: 361px) {
    font-size: 1.1rem;
  }
`;

export const CourseDescription = styled.p`
  font-size: 0.9rem;
  font-weight: lighter;
  letter-spacing: 0.02rem;
  flex-grow: 1;
  margin: 10px 10px 0 10px;

  @media (max-width: 1031px) {
    font-size: 1.05rem;
    letter-spacing: 0.03rem;
  }
  @media (max-width: 891px) {
    font-size: 0.95rem;
    letter-spacing: 0.03rem;
    margin-top: 0;
  }
  @media (max-width: 531px) {
    font-size: 0.9rem;
    margin: 0 5px 0 5px;
  }
  @media (max-width: 361px) {
    font-size: 0.85rem;
    letter-spacing: 0;
    margin: 0;
  }
`;

export const PdfButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: ${({ isActive }) => (isActive ? 'auto' : 'none')};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.6)};
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
  transition: opacity 0.3s ease, cursor 0.3s ease;

  @media (max-width: 1031px) {
    pointer-events: auto;
    opacity: 1;
    cursor: pointer;
  }
`;
