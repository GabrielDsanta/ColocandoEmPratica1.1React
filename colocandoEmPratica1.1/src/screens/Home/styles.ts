import styled from "styled-components";


export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #0D0D0D;

    h1{
        color: #FFF;
        margin-bottom: .5rem;
    }

    h2{
        margin-top: 1rem;
        color: #FFF;
    }
`

export const ContainerInputs = styled.div`
    display: flex;
    gap: .5rem;

    input{
        width: 5rem;
        height: 1.5rem;
        text-align: center;
        outline: none;
        background-color: transparent;
        border: solid 1px rgba(255, 255, 255, 50%);
        color: #FFF;
        font-size: 1.2rem;
        padding: 1rem;
        border-radius: 4px;
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    margin-top: 2rem;
`

export const ButtonStyles = styled.button`
    width: 5rem;
    height: 1.5rem;
    text-align: center;
    background-color: transparent;
    border: solid 1px rgba(255, 255, 255, 50%);
    padding: 1rem;
    border-radius: 4px;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    cursor: pointer;
`