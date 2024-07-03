import styled from 'styled-components';

export const StyledNotFound = styled.main`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    div{
        display: flex;
        align-items: center;
        flex-direction: column;
        
        img{
            width: 90px;
            height: 90px;
            background-color: rgb(0,162,232);
            border-radius: 50%;
        }
        h1,h2,a {
            color: white;
        }
        h1,h2,h3 {
            margin: 10px;
        }
        h1 {
            font-size: 40px;
        }
        h2 {
            font-size: 25px;
        }
        h3 {
            font-size: 18px;
        }
    }
`