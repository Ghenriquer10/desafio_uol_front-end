import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        font-family: sans-serif;
        height: 100%;
        
        button{
            cursor: pointer;
        }
    }

    ul{
        list-style-type: none;
    }

    a{
        text-decoration: none;
        cursor: pointer;
    }
`;