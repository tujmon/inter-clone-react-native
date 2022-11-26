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

import openEye from '../../../../../assets/open-eye.jpg'
import closedEye from '../../../../../assets/closed-eye.jpg'

export default function Balance({show, setShowBalance}: Props) {
  return (
    <Container>
      {show ? <BalanceText>R$ 0.00</BalanceText> : <BalanceTextHide />}
      <ToggleBalance onPress={() => setShowBalance((prevState) => !prevState)}>
        <EyeIcon
          source={
            show
              ? openEye
              : closedEye
          }
        />
      </ToggleBalance>
    </Container>
  );
}
