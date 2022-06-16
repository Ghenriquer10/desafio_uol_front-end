import styled from 'styled-components';

export const BackgroundDelete = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    top: 0;
`;

export const DeleteWrapper = styled.div`
    border: 1px solid red;
    height: 300px;
    width: 500px;
    background: #fff;
    color: #000;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: black;
    border: 5px solid black;
    margin-top: -100px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 320px) and (max-width: 480px) {
        height: 100%;
        width: 300px;
    }

    @media (min-width: 481px) and (max-width: 768px) {
        height: 100%;
        width: 400px;
    }
`;

export const DeleteContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 20px;
    
    h1{
        width: 101%;
        text-align: center;
        color: #fff;
        margin-bottom: 60px;
    }
    
    p{
        color: #fff;
        font-size: 1.5em;
        text-align: center;
        margin-bottom: 60px;

        @media (min-width: 320px) and (max-width: 768px) {
            font-size: 1.0em;
        }
    }
`;

export const ButtonDelete = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .cancel, .delete{
        color: #FFF;
        border: none;
        width: 100px;
        height: 40px;
        border-radius: 2px;
        font-weight: bold;
        cursor: pointer;
    }

    .cancel{
        background-color: #fff;
        color: orange;
    }
    .delete{
        background-color: red;
    }
`;