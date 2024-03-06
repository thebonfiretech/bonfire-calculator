import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background: ${({theme, secondary}) => secondary ? 'transparent' : theme.colors.gradient};
  color: ${({theme}) => theme.colors.text};
  padding: ${({height}) => height}px 0;
  width: ${({width}) => width}vw;
  text-transform: uppercase;
  box-sizing: border-box;
  transition: ease .3s;
  letter-spacing: 2px;
  position: relative;
  border-radius: 2px;
  font-weight: 800;
  overflow: hidden;
  cursor: pointer;
  margin: 5px;

&:hover {
opacity: 85%;
}
  
${({ secondary }) =>
  secondary
    ? `
      border-image-source: linear-gradient(91deg, #024FF0 0.52%, #0499C8 100%);
      background-image: linear-gradient(91deg, #024FF0 0.52%, #0499C8 100%);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      border-image-slice: 1;
      background-clip: text;
      border-style: solid;
      border-width: 2px;
    `
    : 'border: none;'}
`