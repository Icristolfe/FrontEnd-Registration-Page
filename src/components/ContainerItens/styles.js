import styled from 'styled-components'

export const ContainerItens = styled.div  `
display:flex;
flex-direction: column;
align-items:center;
background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 61px 61px;
border:none;
outline:none;
width: 500px;
height:100vh;

${props => props.isBlur && `
min-height:calc(100vh - 175px);
backdrop-filter: blur(45px);
`}
`

