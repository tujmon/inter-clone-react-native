import { Dispatch, SetStateAction } from "react";
import {
  Container,
  BalanceText,
  EyeIcon,
  ToggleBalance,
  BalanceTextHide,
} from "./styles";

type Props = {
  show: Boolean,
  setShowBalance: Dispatch<SetStateAction<boolean>>
}
export default function Balance({show, setShowBalance}: Props) {
  return (
    <Container>
      {show ? <BalanceText>R$ 0.00</BalanceText> : <BalanceTextHide />}
      <ToggleBalance onPress={() => setShowBalance((prevState) => !prevState)}>
        <EyeIcon
          source={
            show
              ? require("../../../assets/open-eye.png")
              : require("../../../assets/closed-eye.png")
          }
        />
      </ToggleBalance>
    </Container>
  );
}
