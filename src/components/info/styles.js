import styled from "styled-components";

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    height: 100vh;
    display: flex;
    width: 100%;
`

export const Box = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    border: 0.1px solid rgba(255,255,255, 0.1);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    display: flex;
    padding: 20px;
    height: 70vh;
    width: 60vw;
`

export const Value = styled.div`
    background-color: ${({theme}) => theme.colors.background};
    justify-content: center;
    flex-direction: column;
    padding: 10px 20px;
    border-radius: 5px;
    text-align: start;
    margin: 15px 0;
    display: flex;
    height: auto;
    width: 80%;
    
    p{
        color: ${({theme}) => theme.colors.secondaryText};
        font-size: 14px;

    }
`;

export const Label = styled.label`
    color: ${({theme}) => theme.colors.text};
    font-weight: 500;
    font-size: 15px;
`

export const LabelContainer = styled.div`
    justify-content: start;
    align-items: center;
    flex-direction: row;
    display: flex;
    width: 80%;
`