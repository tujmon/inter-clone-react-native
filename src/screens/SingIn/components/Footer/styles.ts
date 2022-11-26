import styled from "styled-components/native"

export const FooterContainer = styled.View`
width: 100%;
height: 5%;
display: flex;
padding-left: 20px;
padding-right: 20px;
justify-content: space-between;
align-items: center;
flex-direction: row;
margin-bottom: 10px;
`

export const LockImage = styled.Image`
width: 20px;
height: 20px;
`

export const ISafeContainer = styled.View`  
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`
export const ISafeText = styled.Text`
padding-top: 2px;
color: ${({theme}) => theme.colors.primary} ;
align-self: flex-start;
font-weight: bold;
`
export const CreateAccount = styled.Text`
color: ${({theme}) => theme.colors.primary} ;
font-weight: bold;
margin-bottom: 5px;
`