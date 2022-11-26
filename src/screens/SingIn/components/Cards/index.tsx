import {
  Container,
  Card,
  Login,
  UserInfoRow,
  Avatar,
  Initials,
  User,
  Name,
  Account,
  ChangeAccountButtonContainer,
  ChangeAccountText,
  ChangeAccountButton,
  Password,
  PasswordText,
  InputPassword,
  EyeIconPassword,
  SentButton,
  ButtonText,
  ForgotPassword,
} from "./styles";

import { useNavigation } from "@react-navigation/native";
import closedEye from '../../../../../assets/closed-eye.png'
export default function Cards() {
  const navigation = useNavigation();
  function handleNewScreen() {
    navigation.navigate("home");
  }
  return (
    <Container>
      <Card>
        <Login>
          <UserInfoRow>
            <Avatar>
              <Initials>AM</Initials>
            </Avatar>
            <User>
              <Name>Arthur Monici</Name>
              <Account>***.714.401-**</Account>
            </User>
          </UserInfoRow>
          <ChangeAccountButtonContainer>
            <ChangeAccountButton>
              <ChangeAccountText>Trocar</ChangeAccountText>
            </ChangeAccountButton>
          </ChangeAccountButtonContainer>
        </Login>
        <Password>
          <PasswordText>Senha</PasswordText>
          <InputPassword placeholder="Digite sua Senha" />
          <EyeIconPassword source={closedEye} />
        </Password>
        <SentButton onPress={handleNewScreen}>
          <ButtonText>Entrar</ButtonText>
        </SentButton>
        <ForgotPassword>Esqueci minha senha</ForgotPassword>
      </Card>
    </Container>
  );
}
