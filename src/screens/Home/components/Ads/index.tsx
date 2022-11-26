import {
  Container,
  Ad,
  AdImageContainer,
  AdImage,
  AdBottomContainer,
  AdMessage,
  LittleAd,
  LittleAdContainer,
} from "./styles";

import interShop from "../../../../../assets/inter-shop.jpg";
import globalAccount from "../../../../../assets/globalAccount.jpg";
import fgts from "../../../../../assets/fgts.jpg";
import interDoctor from "../../../../../assets/doutor-inter.jpg";

export default function Ads() {
  return (
    <Container>
      <Ad>
        <AdImageContainer>
          <AdImage source={interShop} />
        </AdImageContainer>
        <AdBottomContainer>
          <AdMessage>Inter Shop</AdMessage>
        </AdBottomContainer>
      </Ad>
      <Ad>
        <AdImageContainer>
          <AdImage source={globalAccount} />
        </AdImageContainer>
        <AdBottomContainer>
          <AdMessage>Global Account</AdMessage>
        </AdBottomContainer>
      </Ad>
      <LittleAdContainer>
        <LittleAd>
          <AdImageContainer>
            <AdImage source={fgts} />
          </AdImageContainer>
          <AdBottomContainer>
            <AdMessage>Antecipaçao de{"\n"} FGTS</AdMessage>
          </AdBottomContainer>
        </LittleAd>
        <LittleAd>
          <AdImageContainer>
            <AdImage source={interDoctor} />
          </AdImageContainer>
          <AdBottomContainer>
            <AdMessage>Doutor Inter</AdMessage>
          </AdBottomContainer>
        </LittleAd>
      </LittleAdContainer>
    </Container>
  );
}
