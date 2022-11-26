import { useState } from 'react';
import {  BalanceContainer,
  BalanceTitle,
  BalanceText,
  BalanceTextHide,
  BalanceValue,
  BalanceContent,
  EyeIcon,
  EyeButton,} from './styles'

export default function Balance() {
  const [showBalance, setShowBalance] = useState(false);
  return(
    <BalanceContainer>
        <BalanceContent>
          <BalanceTitle>Saldo disponível</BalanceTitle>
          <BalanceText>Total em conta</BalanceText>
          {showBalance ? (
            <BalanceValue>R$0,00</BalanceValue>
          ) : (
            <BalanceTextHide />
          )}
        </BalanceContent>
        <EyeButton onPress={() => setShowBalance((prevState) => !prevState)}>
          <EyeIcon
            source={
              showBalance
                ? require("../../../../../assets/open-eye.png")
                : require("../../../../../assets/closed-eye.png")
            }
          />
        </EyeButton>
      </BalanceContainer>
  )
}