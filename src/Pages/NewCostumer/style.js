import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.div`
    width: 80%;
    display: flex;
    margin-top: 70px;
    flex-direction: column;
    
    &::after{
        content: '';
        height:2px;
        background-color: grey;
        margin-top: 30px;
        opacity: 0.2;
    }
    
    svg, h1{
        display: flex;
        align-items: center;
    }

    h1{
        @media (min-width: 320px) and (max-width: 768px) {
            font-size: 1.3em;
        }
    }

    svg{
        margin: 0 10px 0 0;
        height: 40px;
        width: 40px;    
    }

`;

export const AddUser = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    height: 70px;
    align-items: center;
    margin-top: 40px;
    
    
    .add-title{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }

    p:first-child{
        font-weight: bold;
    } 
`;

export const CostumerFields = styled.div`
    width: 80%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;


        input, select{
            height: 60px;
            margin: 10px 0;
            width: 400px;
            padding-left: 20px;
            border-radius: 7px;
            border: 1px solid grey;
            font-size: 1.3em;
            color: gray;
            
            @media (min-width: 320px) and (max-width: 480px) {
                height: 40px;
                width: 270px;
            }

            @media (min-width: 481px) and (max-width: 768px) {
                height: 40px;
                width: 350px;
            }
        }
    }

`;

export const CostumerButtons = styled.div`
    height: 90px;
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .create-costume, .back-home{
        height: 40px;
        width: 120px;
        margin: 0 15px;  
        border: none;
    }

    .create-costume{
        background-color: #E29933;
        color: #fff;
        border-radius: 5px;
    }

    .back-home{
        border: 1px solid #E29933;
        color: #E29933;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`;