import styled from "styled-components";

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    height: 100vh;
    display: flex;
    width: 100%;

    .divider{
        border:  0.5px dashed;
        border-color: rgba( 238, 238, 238, 0.1);
        height: 100%;
    }
`

export const Box = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    border: 0.1px solid rgba(255,255,255, 0.1);
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    display: flex;
    padding: 20px;
    height: 80vh;
    width: 60vw;
    `

export const Section = styled.div`
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    padding: 10px;
    display: flex;
    height: 100%;
    width: 50%;
`;

export const Module = styled.div`
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.secondaryText};
    justify-content: space-between;
    padding: 2px 20px;
    align-items: center;
    border-radius: 5px;
    display: flex;
    margin: 5px 0;
    height: 50px;
    width: 80%;
    
    &:hover{
        transition: 0.5s;
        transform: scaleX(1.025);

    }

    .eye{
        &:hover{
            transform: scale(1.010);
            filter: brightness(1.3);
            transition: 0.5s;
        }
        margin-left: 5px;
    }
`;

export const Input = styled.input`
  color: ${({theme}) => theme.colors.secondaryText};
  border: 1px solid rgba(255,255,255, 0.1);
  background-color: #222;
  margin-bottom: 15px;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px;
  outline: none;
  width: 80%;

  &:focus {
    border-color: ${({theme}) => theme.colors.primary};
  }
`;

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