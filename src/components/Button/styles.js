import styled from 'styled-components'

export const Button = styled.button  `
margin-top:98px;
width: 342px;
height: 74px;
background: ${props => props.userButton ? 'transparent' : 'rgba(0, 0, 0, 0.8)'} ;
border-radius: 14px;
font-style: normal;
font-weight: bold;
font-size: 17px;
line-height: 28px;
display:flex;
align-items:center;
justify-content:center;
color: #FFFFFF;
gap: 14px;
border:none;
outline:none;
cursor:pointer;
margin-bottom:50px;
text-decoration:none;

&:hover {
    opacity:0.8;
}

&:active {
    opacity:0.5;
}

${props => props.userButton && `

margin-top:10px;
display:flex;
align-items:center;
justify-content:center;
flex-direction: row-reverse;
margin-bottom:10px;
border: 1px solid #FFFFFF;

img{
    transform:rotateY(180deg)
}

&:hover {
    opacity:0.9;
}

&:active {
    opacity:0.5;
}

` }

`

