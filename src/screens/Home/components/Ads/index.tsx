import {Container, Ad, AdImageContainer, AdImage, AdBottomContainer,AdMessage, LittleAd, LittleAdContainer} from './styles'
export default function Ads() {
  return (
    <Container>
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
      </Container>
  )
}