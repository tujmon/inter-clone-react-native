import styled from 'styled-components/native'

export const Container = styled.View`
  margin-top: 15px;
  display: flex;
  width: 90%;
  align-self: center;
`
export const Purchase = styled.View`
  margin-bottom: 30px;
  width: 100%;
  height: 110px;
`
export const Header = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: #ccc;
  height: 30px;
  border-bottom-width: 1px;
  margin-bottom: 20px;
`
export const Data = styled.Text`
  font-size: 0.75rem;
`
export const Info = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 70px;
  justify-content: space-around;
  align-items: center;
`
export const Icon = styled.View`
  margin-top: 10px;
  align-self: flex-start;
  width: 30px;
  height: 30px;
`
export const InfoDetail = styled.View`
  width: 30px;
  height: 30px;
`
export const Details = styled.View`
  margin-right: 15px;
`
export const Balance = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`
export const BalanceText = styled.Text`
  margin-right: 5px;
  font-size: 0.75rem;
`
export const Value = styled.Text<{ balanceColor: string }>`
  color: ${({ balanceColor }) => balanceColor};
  font-weight: bold;
`

export const IconImg = styled.Image`
  width: 100%;
  height: 100%;
`
export const Type = styled.Text`
  font-weight: bold;
`
export const Detail = styled.Text``
