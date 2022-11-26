import styled from 'styled-components/native'

export const IconsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  align-self: center;
  width: 90%;
`

export const Icon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.light};
`
export const IconImage = styled.Image`
  width: 50%;
  height: 50%;
`
export const IconContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const IconText = styled.Text`
  margin-top: 5px;
  font-size: 0.625rem;
  font-weight: bold;
`
