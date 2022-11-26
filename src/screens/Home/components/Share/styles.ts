import styled from 'styled-components/native'

export const ShareContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 100%;
  height: 180px;
  background: #f5f6fa;
`

export const ShareContent = styled.View`
  width: 60%;
  display: flex;
  justify-content: center;
  margin-left: 20px;
`

export const ShareTitle = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`

export const ShareText = styled.Text`
  color: #aaa;
  font-size: 12px;
  margin-bottom: 15px;
`

export const ShareImageContainer = styled.View`
  width: 40%;
  height: 100%;
  background-color: #000;
`

export const ShareImage = styled.Image`
  width: 100%;
  height: 100%;
  align-self: flex-end;
`

export const ShareButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 70%;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 35px;
  border-radius: 10px;
`

export const ShareButtonText = styled.Text`
  color: white;
  font-weight: bold;
`
