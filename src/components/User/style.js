import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
    width: 80%;
    margin: 10px 0;
    border: 1px solid rgb(185,185,185);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;

    @media (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
        height: 200px;
        padding: 20px;
    }

    p{
        font-size: 0.9em ;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    svg{
        margin-right: 5px;
    }
    
    .name-email, .status, .phone{
        width: 100%;
        display: flex;
        height: 100%;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
    }

    .status{
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: capitalize;
    }

    .edit-button{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        height: 100%;
        align-items: center;
        margin-right: 30px;

        @media (min-width: 320px) and (max-width: 768px) {
            justify-content: center;
            margin-right: 0;
        }
    }

    .bold{
        font-weight: bold;
    }

    .grey{
        color: grey;
    }

    .edit, .delete{
        margin: 0 10px;
        width: 100px;
        height: 30px;
        border: 1px solid #E29933;
        background-color: #fff;
        border-radius: 5px;
        color: #E29933;
    }

    .delete{
        border-radius: 5px;
        background-color: red;
        color: #fff;
    }

    button:hover{
        transition: all 1s;
        background-color: #E29933;
        color: #fff;
    }
`;