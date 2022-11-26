import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 120px;
`;


export const Info = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.Image`
  margin-left: 20px;
  width: 80px;
  height: 30px;
`;

export const Countries = styled.View`
  margin-left: 20px;
  margin-top: 4%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70px;
  height: 22px;
  border-radius: 15px;
  border: 2px #ccc;
  align-items: center;
`;


export const BrazilContainer = styled.View`
  padding: 2px 1px;
  border-radius: 15px;
  margin-left: 2px;
  background: #ccc;
  width: 50%;
  align-items: center;
`;
export const Brazil = styled.Image`
  width: 15px;
  height: 10px;
`;
export const UsaContainer = styled.View`
  padding: 4px;
  width: 50%;
  align-items: center;
`;
export const Usa = styled.Image`
  width: 15px;
  height: 10px;
`;

export const Options = styled.View`
  display: flex;
  flex-direction: row;
`;

export const SearchIcon = styled.Image`
  margin-right: 20px;
  width: 25px;
  height: 25px;
`;

export const More = styled.Image`
  margin-right: 20px;
  width: 25px;
  height: 25px;
`;
