import styled from "styled-components";

export const Container = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #333333;

    svg{
        cursor: pointer;
    }

    @media (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
        height: 120px;
    }

    .image-logo{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img{
        height: 50px;
        width: 100px;
    }


    .contacts{
        color: white;
        width: 30%;

        @media (min-width: 320px) and (max-width: 768px) {
            width: 100%;
        }
    }

    .developer{
        display: flex;
        align-items: center;
        justify-content: center;

        p{
            font-size: 0.7em;
        }

        svg{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 15px;
            width: 15px;
            margin: 0 4px;
        }
        
    }
    
    .social-media{
        margin-top: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        svg{
            margin: 0 3px;
        }
    }
`;