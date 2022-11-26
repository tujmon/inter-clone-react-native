import {
  Container,
  Month
} from "./styles";

import Purchases from "./components/Purchases";
import Balance from "./components/Balance";
import Header from "./components/Header";
import Icons from "./components/Icons";

export function Extract() {
  return (
    <Container>
      <Header/>
      <Icons/>
      <Balance/>
      <Month>Outubro</Month>
      <Purchases/>
    </Container>
  );
}
