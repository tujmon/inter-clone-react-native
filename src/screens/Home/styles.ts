import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 120px;
`;

export const Logo = styled.Image`
  margin-left: 20px;
  width: 80px;
  height: 30px;
`;
export const CountryContainer = styled.View`
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

export const SearchIcon = styled.Image`
  margin-right: 20px;
  width: 25px;
  height: 25px;
`;

export const MoreOptions = styled.Image`
  margin-right: 20px;
  width: 25px;
  height: 25px;
`;

export const OptionsContainer = styled.View`
  display: flex;
  flex-direction: row;
`;
export const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
`;
export const BalanceContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const BalanceText = styled.Text`
  margin-left: 30px;
  font-size: 26px;
  font-weight: bold;
`;
export const EyeIcon = styled.Image`
  width: 25px;
  height: 25px;
`;
export const ExtractButton = styled.TouchableOpacity`
`

export const ExtractText = styled.Text`
  margin-left: 30px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;
export const ActionsContainer = styled.View`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  flex-direction: row;
`;
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
`;
export const ActionImage = styled.Image`
  width: 35px;
  height: 35px;
`;
export const ActionText = styled.Text`
  margin-top: 15px;
  font-weight: bold;
  font-size: 10px;
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
export const BalanceTextHide = styled.View`
  margin-left: 30px;
  background: #ccc;
  border-radius: 7px;
  width: 80px;
  height: 31px;
`;
export const AdContainer = styled.View`
  margin-top: 25px;
`;
export const Ad = styled.View`
  display: flex;
  margin-bottom: 15px;
  align-self: center;
  width: 90%;
  height: 180px;
`;

export const AdImageContainer = styled.View`
  width: 100%;
  height: 70%;
  border: 1px solid #ccc;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
`;

export const AdImage = styled.Image`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const AdBottomContainer = styled.View`
  border-top: 2px solid #000;
  padding-left: 20px;
  width: 100%;
  height: 30%;
  border: 1px solid #ccc;
  border-radius: 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
`;
export const AdMessage = styled.Text`
  padding-top: 15px;
  font-weight: bold;
`;

export const LittleAd = styled.View`
  display: flex;
  margin-bottom: 15px;
  align-self: center;
  width: 48%;
  height: 180px;
`;

export const LittleAdContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  align-self: center;
  width: 90%;
  height: 180px;
`;

export const IconsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  align-self: center;
  width: 90%;
`;

export const Icon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.light};
`;
export const IconImage = styled.Image`
  width: 50%;
  height: 50%;
`;
export const IconContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconText = styled.Text`
  margin-top: 5px;
  font-size: 10px;
  font-weight: bold;
`;
export const HelpContainer = styled.View`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 15px;
  align-self: center;
  width: 90%;
  height: 90px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
`;
export const HelpImageContainer = styled.View`
  width: 20%;
  height: 100%;
`;
export const HelpImage = styled.Image`
  margin-left: 10px;
  width: 90%;
  height: 100%;
`;
export const HelpTextContainer = styled.View``;
export const HelpTitle = styled.Text`
  font-weight: bold;
`;
export const HelpText = styled.Text`
  font-size: 12px;
  color: #aaa;
`;
export const HelpIconContainer = styled.View`
  align-self: flex-end;
`;
export const HelpIcon = styled.Image``;

export const ShareContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 100%;
  height: 180px;
  background: #f5f6fa;
`;

export const ShareContent = styled.View`
  width: 60%;
  display: flex;
  justify-content: center;
  margin-left: 20px;
`;

export const ShareTitle = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const ShareText = styled.Text`
  color: #aaa;
  font-size: 12px;
  margin-bottom: 15px;
`;

export const ShareImageContainer = styled.View`
  width: 40%;
  height: 100%;
  background-color: #000;
`;

export const ShareImage = styled.Image`
  width: 100%;
  height: 100%;
  align-self: flex-end;
`;

export const ShareButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 70%;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 35px;
  border-radius: 10px;
`;

export const ShareButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;
