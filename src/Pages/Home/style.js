import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
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

    .add-button{
        display: flex;
        margin-right: 30px;
        width: 50%;
        justify-content: flex-end;
        height: 100%;
        align-items: center;


        a{
            width: 19%;
            height: 45%;
            border: none;
            background-color: #E29933;
            color: #fff;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }


`;
