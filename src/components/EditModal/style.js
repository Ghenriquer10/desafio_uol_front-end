import styled from "styled-components";

export const DetailsBackground = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

export const EditWrapper = styled.div`
    height: 600px;
    width: 700px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    z-index: 10;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: #1F1C1B;
    border: 1px solid #fff;
    margin-top: -100px;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 320px;
    }

    @media (min-width: 481px) and (max-width: 768px) {
        width: 480px;
    }

`;



export const DetailContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.8;
    color: #fff;
    height: 100%;
    width: 100%;
`;

export const Item = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    
    form{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;

        label{
            margin-top: 20px;
        }
        
        input{
            height: 50px;
            width: 80%;
            margin-bottom: 20px;
            text-align: center;
            font-size: 1.3em;
            
        @media (min-width: 320px) and (max-width: 768px) {
            height: 30px;
            font-size: 1.0em;
        }

        }

        select{
            height: 50px;
            width: 80%;
            margin-bottom: 20px;
            text-align: center;
            font-size: 1.3em;

            @media (min-width: 320px) and (max-width: 768px) {
                height: 30px;
                font-size: 1.0em;
            }
        }
    }
`;

export const Buttons = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        flex-direction: row;
        margin-top: 30px;
        
        button{
            width: 30%;
            height: 30px;
            border: none;
            color: #fff;
            background-color: #E29933;
            margin: 0 5px;
        }

        .edit{
            background-color: green;
            color: #fff;
        }

        .close{
            background-color: red;
            color: #fff;
        }
`;