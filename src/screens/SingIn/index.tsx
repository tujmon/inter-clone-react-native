import { 
  Container,
  CardsContainer,
  LogoContainer,
  LogoImage,
  Cards,
  Login,
  Password,
  InputPassword,
  UserInfoRow,
  Avatar,
  Initials,
  User,
  Name,
  Account,
  SentButton,
  ButtonText,
  PasswordText,
  ChangeAccountButton,
  ChangeAccountButtonContainer,
  ChangeAccountText, 
  FooterContainer,
  LockImage,
  ISafeContainer,
  ISafeText,
  CreateAccount,
  ForgotPassword,
  EyeIconPassword,
  TipsImage
} from './styles'

import { Text, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
export function SingIn() {
  const navigation = useNavigation();
  function handleNewScreen() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <TipsImage source={require('../../../assets/tips.png')} />
      <LogoContainer>
        <LogoImage 
          source={require('../../../assets/logo.png')}
        />
      </LogoContainer>
      <CardsContainer>
        <Cards>
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
            <InputPassword
              placeholder="Digite sua Senha"
            />
            <EyeIconPassword source={require('../../../assets/closed-eye.png')}/>
          </Password>
          <SentButton
           onPress={handleNewScreen}
          >
            <ButtonText>Entrar</ButtonText>
          </SentButton>
          <ForgotPassword>Esqueci minha senha</ForgotPassword>
        </Cards>
      </CardsContainer>
      <FooterContainer>
        <ISafeContainer>
           <LockImage source={require('../../../assets/lock.png')}/>
          <ISafeText>
            ISafe
          </ISafeText>
        </ISafeContainer>
        <CreateAccount>Trocar ou abrir conta</CreateAccount>
      </FooterContainer>
    </Container>
    
  );
}
