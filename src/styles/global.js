import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body, html, #root{
        font-family: sans-serif;   
    }
    
    button{
        cursor: pointer;
    }

    ul{
        list-style-type: none;
    }

    a{
        text-decoration: none;
        cursor: pointer;
    }
`;