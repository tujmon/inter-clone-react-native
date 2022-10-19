import { Text } from "react-native";
import { EyeIconPassword } from "../SingIn/styles";
import {
  Container,
  Header,
  Logo,
  CountryContainer,
  Brazil,
  Usa,
  SearchIcon,
  MoreOptions,
  OptionsContainer,
  InfoContainer,
  BalanceContainer,
  BalanceText,
  EyeIcon,
  ExtractButton,
  ExtractText,
  ActionsContainer,
  Action,
  ActionImage,
  ActionText,
  ToggleActions,
  ToggleImage,
  ToggleBalance,
  BalanceTextHide,
  BrazilContainer,
  UsaContainer,
  AdContainer,
  Ad,
  AdImage,
  AdMessage,
  AdImageContainer,
  AdBottomContainer,
  LittleAd,
  LittleAdContainer,
  IconsContainer,
  Icon,
  IconImage,
  IconContainer,
  IconText,
  HelpContainer,
  HelpImageContainer,
  HelpImage,
  HelpTextContainer,
  HelpTitle,
  HelpText,
  HelpIcon,
  ShareContainer,
  ShareContent,
  ShareTitle,
  ShareText,
  ShareImage,
  ShareImageContainer,
  ShareButton,
  ShareButtonText,
} from "./styles";
import { useState } from "react";
import {useNavigation} from '@react-navigation/native'
export function Home() {
  const [showActions, setShowActions] = useState(false);
  const [showBalance, setShowBalance] = useState(false);

  const navigation = useNavigation();
  
  function handleNewScreen() {
    navigation.navigate('extract')
  }
  
  return (
    <Container>
      <Header>
        <InfoContainer>
          <Logo source={require("../../../assets/logo.png")} />
          <CountryContainer>
            <BrazilContainer>
              <Brazil source={require("../../../assets/brazil.png")} />
            </BrazilContainer>
            <UsaContainer>
              <Usa source={require("../../../assets/usa.png")} />
            </UsaContainer>
          </CountryContainer>
        </InfoContainer>
        <OptionsContainer>
          <SearchIcon source={require("../../../assets/search.png")} />
          <MoreOptions source={require("../../../assets/more.png")} />
        </OptionsContainer>
      </Header>
      <BalanceContainer>
        {showBalance ? <BalanceText>R$ 0.00</BalanceText> : <BalanceTextHide />}
        <ToggleBalance
          onPress={() => setShowBalance((prevState) => !prevState)}
        >
          <EyeIcon
            source={
              showBalance
                ? require("../../../assets/open-eye.png")
                : require("../../../assets/closed-eye.png")
            }
          />
        </ToggleBalance>
      </BalanceContainer>
      <ExtractButton onPress={handleNewScreen}>
        <ExtractText>Ver extrato</ExtractText>
      </ExtractButton>
      <ActionsContainer>
        <Action>
          <ActionImage source={require("../../../assets/pix.png")} />
          <ActionText>Pix</ActionText>
        </Action>
        <Action>
          <ActionImage source={require("../../../assets/pix.png")} />
          <ActionText>Pix</ActionText>
        </Action>
        <Action>
          <ActionImage source={require("../../../assets/pix.png")} />
          <ActionText>Pix</ActionText>
        </Action>
        {showActions && (
          <>
            <Action>
              <ActionImage source={require("../../../assets/pix.png")} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={require("../../../assets/pix.png")} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={require("../../../assets/pix.png")} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={require("../../../assets/pix.png")} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={require("../../../assets/pix.png")} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={require("../../../assets/pix.png")} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={require("../../../assets/pix.png")} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={require("../../../assets/pix.png")} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={require("../../../assets/pix.png")} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={require("../../../assets/pix.png")} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={require("../../../assets/pix.png")} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={require("../../../assets/pix.png")} />
              <ActionText>Pix</ActionText>
            </Action>
          </>
        )}
      </ActionsContainer>
      <ToggleActions onPress={() => setShowActions((prevState) => !prevState)}>
        <ToggleImage
          isClicked={showActions}
          source={require("../../../assets/chevron-down.png")}
        />
      </ToggleActions>
      <AdContainer>
        <Ad>
          <AdImageContainer>
            <AdImage source={require("../../../assets/inter-shop.jpg")} />
          </AdImageContainer>
          <AdBottomContainer>
            <AdMessage>Inter Shop</AdMessage>
          </AdBottomContainer>
        </Ad>
        <Ad>
          <AdImageContainer>
            <AdImage source={require("../../../assets/global-account.jpg")} />
          </AdImageContainer>
          <AdBottomContainer>
            <AdMessage>Global Account</AdMessage>
          </AdBottomContainer>
        </Ad>
        <LittleAdContainer>
          <LittleAd>
            <AdImageContainer>
              <AdImage source={require("../../../assets/fgts.jpg")} />
            </AdImageContainer>
            <AdBottomContainer>
              <AdMessage>Antecipaçao de{"\n"} FGTS</AdMessage>
            </AdBottomContainer>
          </LittleAd>
          <LittleAd>
            <AdImageContainer>
              <AdImage source={require("../../../assets/doutor-inter.jpg")} />
            </AdImageContainer>
            <AdBottomContainer>
              <AdMessage>Doutor Inter</AdMessage>
            </AdBottomContainer>
          </LittleAd>
        </LittleAdContainer>
      </AdContainer>
      <IconsContainer>
        <IconContainer>
          <Icon>
            <IconImage source={require("../../../assets/seguros.png")} />
          </Icon>
          <IconText>Seguros</IconText>
        </IconContainer>
        <IconContainer>
          <Icon>
            <IconImage source={require("../../../assets/present.png")} />
          </Icon>
          <IconText>Gift Card</IconText>
        </IconContainer>
        <IconContainer>
          <Icon>
            <IconImage source={require("../../../assets/recharge.png")} />
          </Icon>
          <IconText>Recarga</IconText>
        </IconContainer>
        <IconContainer>
          <Icon>
            <IconImage source={require("../../../assets/see-all.png")} />
          </Icon>
          <IconText>Ver todos</IconText>
        </IconContainer>
      </IconsContainer>

      <HelpContainer>
        <HelpImageContainer>
          <HelpImage source={require("../../../assets/help-image.jpg")} />
        </HelpImageContainer>
        <HelpTextContainer>
          <HelpTitle>Precisa de ajuda?</HelpTitle>
          <HelpText>
            Fale no chat, tire suas duvidas e{"\n"} acompanhe seus chamados
          </HelpText>
        </HelpTextContainer>
        <HelpIcon source={require("../../../assets/chevron-right.png")} />
      </HelpContainer>

      <ShareContainer>
        <ShareContent>
          <ShareTitle>Convide seus amigos</ShareTitle>
          <ShareText>
            Indique o Inter e chame todo mundo para {"\n"} simplificar a sua
            vida!
          </ShareText>
          <ShareButton>
            <ShareButtonText>Convidar</ShareButtonText>
          </ShareButton>
        </ShareContent>
        <ShareImageContainer>
          <ShareImage source={require("../../../assets/footer-image.jpg")} />
        </ShareImageContainer>
      </ShareContainer>
    </Container>
  );
}
