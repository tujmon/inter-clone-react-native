import styled from 'styled-components/native'
export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const BalanceText = styled.Text`
  margin-left: 30px;
  font-size: 26px;
  font-weight: bold;
`
export const EyeIcon = styled.Image`
  width: 25px;
  height: 25px;
`

export const ToggleBalance = styled.TouchableOpacity`
  margin-left: 10px;
  width: 25px;
  height: 25px;
`

export const BalanceTextHide = styled.View`
  margin-left: 30px;
  background: #ccc;
  border-radius: 7px;
  width: 80px;
  height: 31px;
`
