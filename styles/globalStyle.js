import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Karla', sans-serif;  
        scrollbar-width: none;
    }


   *::-webkit-scrollbar{
        width: 0;
        height: 0;
    }

    h1{  
        font-family: 'Spectral', serif;
        font-size: 4.25rem;
        color: white;
        line-height: 1.1;
        font-weight: 400;
    }

    h2{
        font-family: 'Spectral', serif;
        font-size: 3rem;
        color: white;
        line-height: 1.1;
        font-weight: 400;
    }

    h3{  
        font-family: 'Spectral', serif;
        font-size: 2.25rem;
        color: white;
        line-height: .9;
        font-weight: 400;
    }

    h4{
        font-family: 'Spectral', serif;
        font-size: 1.25rem;
        color: white;
        font-weight: 400;
    }

    p{ 
        font-family: 'Karla', sans-serif;
        font-weight: 400;
        font-size: 1rem; 
    }

    a{
        font-family: 'Karla', sans-serif;
        font-weight: 400;
        font-size: 1rem; 
    }


    /* MEDIA QUERIES*/
    @media screen and (min-width: 768px){
        h1{
            font-size: 6rem;
        }
    }
    @media screen and (min-width: 1400px){
        h1{
            font-size: 7.5vw;
        }
    }
    @media screen and (min-width: 768px){
        h2{
            font-size: 4rem;
        }
    }
    @media screen and (min-width: 1400px){
        h2{
            font-size: 5vw;
        }
    }
    @media screen and (min-width: 768px){
        h3{
            font-size: 3.25vw;
        }
    }
    @media screen and (min-width: 768px){
        h4{
            font-size: 1.5rem;
        }
    }
    @media screen and (min-width: 768px){
        p{
            font-size: 1.125rem;
        }
    }
    @media screen and (min-width: 768px){
        a{
            font-size: 1.25rem;
        }
    }

    `;

export default GlobalStyle;
