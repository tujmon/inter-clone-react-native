import {HelpContainer, HelpImageContainer, HelpImage, HelpTextContainer, HelpTitle, HelpText, HelpIcon} from './styles'

export default function Help () {
  return (
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
  )
}