import styled from 'styled-components/native'

export const Container = styled.View`
  margin-top: 25px;
`
export const Ad = styled.View`
  display: flex;
  margin-bottom: 15px;
  align-self: center;
  width: 90%;
  height: 180px;
`

export const AdImageContainer = styled.View`
  width: 100%;
  height: 70%;
  border: 1px solid #ccc;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
`

export const AdImage = styled.Image`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const AdBottomContainer = styled.View`
  border-top: 2px solid #000;
  padding-left: 20px;
  width: 100%;
  height: 30%;
  border: 1px solid #ccc;
  border-radius: 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
`
export const AdMessage = styled.Text`
  padding-top: 15px;
  font-weight: bold;
`

export const LittleAd = styled.View`
  display: flex;
  margin-bottom: 15px;
  align-self: center;
  width: 48%;
  height: 180px;
`

export const LittleAdContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  align-self: center;
  width: 90%;
  height: 180px;
`
