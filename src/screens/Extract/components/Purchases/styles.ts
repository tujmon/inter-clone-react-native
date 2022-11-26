import styled from "styled-components/native"

export const PurchasesContainer = styled.View`
margin-top: 15px;
display: flex;
width: 90%;
align-self: center;
`
export const PurchaseContainer = styled.View`
margin-bottom: 30px;
width: 100%;
height: 110px;
`
export const PurchaseHeader = styled.View`
display: flex;
width: 100%;
flex-direction: row;
justify-content: space-between;
border-bottom-color: #ccc;
height: 30px;
border-bottom-width: 1px;
margin-bottom: 20px;
`
export const PurchaseData = styled.Text`
font-size: 12px;
`
export const PurchaseInfo = styled.View`
width: 100%;
display: flex;
flex-direction: row;
height: 70px;
justify-content: space-around;
align-items: center;
`
export const PurchaseIconContainer = styled.View`
margin-top: 10px;
align-self: flex-start;
width: 30px;
height: 30px;
`
export const PurchaseInfoDetailContainer= styled.View`
width: 30px;
height: 30px;
`
export const PurchaseDetailsContainer = styled.View`
margin-right: 15px;
`
export const PurchaseBalanceContainer = styled.View`
display: flex;
flex-direction: row;
align-items: baseline;
`
export const PurchaseBalance = styled.Text`
margin-right: 5px;
font-size: 12px;
`
export const PurchaseBalanceValue = styled.Text<{balanceColor: string}>`
color: ${({balanceColor}) => balanceColor};
font-weight: bold;
`

export const PurchaseIcon = styled.Image`
width: 100%;
height: 100%;
`
export const PurchaseType = styled.Text`
font-weight: bold;
`
export const PurchaseDetails = styled.Text``
