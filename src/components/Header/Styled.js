import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: var(--preto-gradient);
  box-shadow: rgba(61, 61, 61, 0.25) 0px 4px 4px;
  position: fixed;
  width: 100%;
  padding: 0.5rem;
  top: 0px;
  z-index: 2;

  .menuCenter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0 auto;
    max-width: 1000px;
    padding: 0 15px;
  }

  a {
    color: rgb(255, 255, 255);
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
   
  }
  
  ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
   
    :hover{
      text-shadow: rgb(0, 162, 200) 0px 0px 8px; 
    }
  }

  .active {
    color: rgb(0, 162, 2032);
    text-shadow: rgb(0, 162, 2032) 0px 0px 5px;
  }
`;
