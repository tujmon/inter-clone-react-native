import styled from "styled-components/native";
export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const TipsImage = styled.Image`
  position: absolute;
  top: 5%;
  left:85%;
  width: 25px;
  height: 25px;
`


export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.primary} ;
`


export const CardsContainer = styled.View`
  flex: 1;
  background: #fff;
  padding: 0 20px 20px;
  margin-top: 30%;
`;


export const Cards = styled.View`
  position: absolute;
  width: 100%;
  margin-left: 20px;
  top: -25px;
`
export const Login = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px #f5f6fa;
  padding: 10px 20px 15px;
  border-radius: 6px;
`;

export const UserInfoRow= styled.View`
  flex-direction: row;
  align-items: center;
`

export const Avatar  = styled.View`
  background: #6B6C71;
  width: 40px;
  height: 40px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`

export const Initials = styled.Text`
  color: #f5f6fa;
  font-size: 16px;
  font-weight: bold;
`;

export const User = styled.View``;

export const Name = styled.Text`
  color: #4d4e60;
  font-size: 15px;
`;

export const Account = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 15px;
`;

export const ChangeAccountButtonContainer = styled.View`
`;


export const ChangeAccountText = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-weight: bold;
`;

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

export const Password = styled.View`
  /* background: #f5f6fa; */
  padding-top: 20px;
  margin-top: 10px;
`;

export const PasswordText = styled.Text`
  font-weight: 300;
  font-size: 14px;
  margin-bottom: 5px;
`

export const InputPassword = styled.TextInput`
    position: relative;
    background: #f5f6fa;
    width: 100%;
    padding: 10px;
    border-radius: 6px;
`

export const SentButton = styled.TouchableOpacity`
  margin-top: 30px;
  border-radius: 6px;
  background-color: ${({theme}) => theme.colors.primary} ;
  padding: 15px 20px 15px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`

export const ChangeAccountButton = styled.TouchableOpacity`
  padding-top: 5px;
`;


export const FooterContainer = styled.View`
  width: 100%;
  height: 5%;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
`

export const LockImage = styled.Image`
  width: 20px;
  height: 20px;
`

export const ISafeContainer = styled.View`  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
export const ISafeText = styled.Text`
  padding-top: 2px;
  color: ${({theme}) => theme.colors.primary} ;
  align-self: flex-start;
  font-weight: bold;
`
export const CreateAccount = styled.Text`
  color: ${({theme}) => theme.colors.primary} ;
  font-weight: bold;
  margin-bottom: 5px;
`

export const ForgotPassword = styled.Text`
  margin-top: 35px;
  color: ${({theme}) => theme.colors.primary} ;
  font-weight: bold;
  align-self: center;
`

export const EyeIconPassword = styled.Image`
  position: absolute;
  top: 75%;
  left: 87%;
  width: 30px;
  height: 30px;
`