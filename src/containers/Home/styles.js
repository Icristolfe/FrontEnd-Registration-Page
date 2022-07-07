import styled from 'styled-components'

import Background from "../../assets/bg.svg"

export const Container = styled.div `
background: url(${Background});
background-size:cover;
width: 100vw;
height:100vh;
display:flex;
flex-direction: column;
align-items:center;
`

export const Label = styled.label  `
font-style: normal;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;
color: #EEEEEE;
margin-right: 247px ;
`

export const Input = styled.input  `
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
border:none;
outline:none;
padding-left: 25px;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
margin-bottom:34px;

`



export const ConsultImage = styled.img `
margin-top:30px;
margin-bottom:45px;
`

export const User = styled.li `
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
border:none;
outline:none;
padding-left: 25px;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
margin-bottom:34px;
text-decoration:none;
display:flex;
align-items:center;
justify-content:space-around;
margin-top:30px;
gap:70px;
padding-right:13px;
padding-left:27px;

p {
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
}


button {
    background:none;
    border:none;
    outline:none;
    cursor:pointer;
}

&:hover {
    opacity:0.8;
}

&:active {
    opacity:0.5;
}

`