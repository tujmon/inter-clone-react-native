import {
  Purchase,
  Header,
  Data,
  Info,
  InfoDetail,
  BalanceText,
  Value,
  IconImg,
  Type,
  Detail,
  Container,
  Balance,
  Details,
  Icon
} from './styles'

import chevronRight from '../../../../../assets/chevron-right.png'

export default function Purchases() {
  const { purchases, formatDate } = usePurchases()
  return (
    <Container>
      {purchases.map((purchase) => (
        <Purchase key={purchase.key}>
          <Header>
            <Data>{formatDate(purchase.data)}</Data>
            <Balance>
              <BalanceText>{purchase.BalanceInfo}</BalanceText>
              <Value balanceColor="black">R$ 0,00</Value>
            </Balance>
          </Header>
          <Info>
            <Icon>
              <IconImg source={purchase.IconPath}></IconImg>
            </Icon>
            <Details>
              <Type>{purchase.type}</Type>
              <Value balanceColor={purchase.colorBalance}>
                {purchase.balanceValue}
              </Value>
              <Detail>{purchase.details} </Detail>
            </Details>
            <InfoDetail>
              <IconImg source={chevronRight} />
            </InfoDetail>
          </Info>
        </Purchase>
      ))}
    </Container>
  )
}
