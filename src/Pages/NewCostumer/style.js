import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
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
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        width: 50%;

    }

    p:first-child{
        font-weight: bold;
    } 
`;

export const CostumerFields = styled.div`
    height: 350px;
    width: 80%;
    margin-top: 30px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    input, select{
        width: 25%;
        height: 60px;
        padding-left: 20px;
        border-radius: 7px;
        border: 1px solid grey;
        font-size: 1.3em;
        color: gray;
    }
`;

export const CostumerButtons = styled.div`
    height: 90px;
    width: 80%;
    margin-top: 10px;
    margin-bottom: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .create-costume, .back-home{
        height: 40px;
        width: 10%;
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