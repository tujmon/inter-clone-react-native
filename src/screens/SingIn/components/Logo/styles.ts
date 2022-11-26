import styled from "styled-components/native";

export const LogoContainer = styled.View`
  height: 23%;
  align-items: center;
  justify-content: center;
`

export const LogoImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 100px;
  flex: 1;
`;
