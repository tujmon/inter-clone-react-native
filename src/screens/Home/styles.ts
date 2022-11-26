import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
`;
export const ExtractButton = styled.TouchableOpacity`
`
export const ExtractText = styled.Text`
  margin-left: 30px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;
export const ToggleActions = styled.TouchableOpacity`
  align-self: center;
  width: 30px;
  height: 50px;
`;
export const ToggleImage = styled.Image<{ isClicked: boolean }>`
  width: 30px;
  height: 50px;
  transform: ${(props) =>
    props.isClicked ? "rotate(180deg)" : "rotate(0deg)"};
`;
export const ToggleBalance = styled.TouchableOpacity`
  margin-left: 10px;
  width: 25px;
  height: 25px;
`;