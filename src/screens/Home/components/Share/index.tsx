import {ShareContainer, ShareContent, ShareTitle, ShareText, ShareButton, ShareButtonText, ShareImageContainer, ShareImage } from './styles'
export default function Share() {
  return(
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
  )
}