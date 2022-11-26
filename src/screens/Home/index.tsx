import {
  Container,
  ExtractButton,
  ExtractText,
  ToggleActions,
  ToggleImage,
} from "./styles";

import { useState } from "react";
import {useNavigation} from '@react-navigation/native'

import Header from "./components/Header";
import Balance from "./components/Balance";
import Actions from "./components/Actions";
import Ads from "./components/Ads";
import Icons from "./components/Icons";
import Help from "./components/Help";
import Share from "./components/Share";

export function Home() {
  const [showActions, setShowActions] = useState(false);
  const [showBalance, setShowBalance] = useState(false);

  const navigation = useNavigation();
  
  function handleNewScreen() {
    navigation.navigate('extract')
  }
  
  return (
    <Container>
      <Header/>
      <Balance
        show={showBalance}
        setShowBalance={setShowBalance}
        />
      <ExtractButton onPress={handleNewScreen}>
        <ExtractText>Ver extrato</ExtractText>
      </ExtractButton>
      <Actions show={showActions}/>
      <ToggleActions onPress={() => setShowActions((prevState) => !prevState)}>
        <ToggleImage
          isClicked={showActions}
          source={require("../../../assets/chevron-down.png")}
        />
      </ToggleActions>
      <Ads/>
      <Icons/>
      <Help/>
      <Share/>
    </Container>
  );
}
