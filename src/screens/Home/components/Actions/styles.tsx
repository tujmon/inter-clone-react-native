import styled from 'styled-components/native'

export const Container = styled.View`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  flex-direction: row;
`
export const Action = styled.View`
  display: flex;
  margin-left: 4px;
  margin-bottom: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding-top: 30px;
  padding-bottom: 30px;
  border: 1px #ccc;
  border-radius: 15px;
`
export const ActionImage = styled.Image`
  width: 35px;
  height: 35px;
`
export const ActionText = styled.Text`
  margin-top: 15px;
  font-weight: bold;
  font-size: 0.625rem;
`
