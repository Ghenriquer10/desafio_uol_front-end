import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    margin-top: 30px;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    .empty-users{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-size: 1.4em;

        svg{
            margin: 0 10px;
            height: 50px;
            width: 50px;
        }
    }

`;

export const Title = styled.div`
    width: 80%;
    display: flex;
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
    margin-bottom: 30px;

    @media (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
    }


    .add-title{
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        width: 100%;

    }

    p:first-child{
        font-weight: bold;
    } 

    .add-button{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: flex-end;
        align-items: center;

        @media (min-width: 320px) and (max-width: 480px) {
            justify-content: center;
            margin-top: 10px;
        }


        a{
            width: 120px;
            height: 40px;
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
