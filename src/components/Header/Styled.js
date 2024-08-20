import styled from 'styled-components';

export const StyledHeader = styled.header`
  z-index: 5;
  position: fixed;
  background: var(--background-gradient);
  box-shadow: rgba(61, 61, 61, 0.25) 0px 4px 4px;
  width: 100%;
  height: 52px;
  padding: 0.5rem;

  nav {
    @media (max-width: 780px) {
      display: none;
    }
  }

  .logoHeader {
    height: 44px;
    display: block;

    @media (max-width: 485px) {
      height: 31px;
    }
  }

.logo {
  width: 130px;

  @media (max-width: 485px) {
    width: 90px;
  }
}

  .menuCenter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0 auto;
    max-width: 1150px;
    padding: 0 15px;
    
    @media (max-width: 780px) {
      margin: 0;
    }
  }
  
  ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    
    :hover {
      text-shadow: rgb(0, 162, 200) 0px 0px 8px; 
    }
    
    li {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }
    
    a {
      color: var(--white);
      font-weight: 500;
      text-decoration: none;
      cursor: pointer;
  
      @media (max-width: 410px) {
        font-size: 0.8rem;
      }
    }

    img {
      width: 32px;
      height: 32px;
      cursor: pointer;
    }
  }

  .active {
    color: var(--blue-header);
    text-shadow: var(--blue-header) 0px 0px 5px;
  }

  .mobile {
    display: none;
    
    @media (max-width: 780px) {
      display: flex;
      width: 40px;
      height: 40px;
      cursor: pointer;
      color: var(--white);
    }
  }
`;

export const Container = styled.div`
  position: fixed;
  backdrop-filter: blur(3px);
  width: 45%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: none;
  align-items: center;
  justify-content: center;
  background: linear-gradient(34deg, rgb(2 15 38 / 95%) 0%, rgba(10, 10, 10, 0.90) 95%);
  transition: opacity 0.5s, transform 0.5s;
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(50px)')};
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')}; /* Evita clique quando invisível */

  @media (max-width: 780px) {
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  }

  nav {
    display: flex;
  }

  > svg {
    position: absolute;
    top: 0.8rem;
    right: 0.3rem;
    cursor: pointer;
    color: var(--white);
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    list-style: none;
    gap: 2rem;
    padding: 0;
  }

  .active {
    color: var(--blue-header);
    text-shadow: var(--blue-header) 0px 0px 5px;
  }
`;
