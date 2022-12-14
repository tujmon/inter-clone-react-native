import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  margin-top: 20px;
  display: flex;
  margin-bottom: 15px;
  align-self: center;
  width: 90%;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 10px;
`
export const Title = styled.Text`
  font-weight: bold;
  margin-bottom: 10px;
`
export const Text = styled.Text`
  font-size: 0.75rem;
  font-weight: 300;
  color: #555;
`

export const TextHide = styled.View`
  background: #ccc;
  border-radius: 7px;
  width: 80px;
  height: 31px;
`

export const Value = styled.Text`
  font-weight: bold;
  font-size: 1.125rem;
`

export const Content = styled.View`
  display: flex;
`
export const EyeButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`
export const EyeIcon = styled.Image`
  align-self: flex-start;
  width: 100%;
  height: 100%;
`
