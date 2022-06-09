import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
    width: 80%;
    margin: 10px 0;
    border: 1px solid rgb(240,240,240);
    display: flex;
    align-items: center;
    justify-content: space-around;

    
    .name-email, .status, .phone{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .edit-button{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        height: 100%;
        align-items: center;
        margin-right: 30px;
    }

    
    button{
        width: 50%;
        height: 50%;
        border: 1px solid #E29933;
        background-color: #fff;
        color: #E29933;
        border-radius: 5px;
    }
    
    button:hover{
        transition: all 1s;
        background-color: #E29933;
        color: #fff;
    }
`;