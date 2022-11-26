import {
  PurchaseContainer,
  PurchaseHeader,
  PurchaseData,
  PurchaseInfo,
  PurchaseInfoDetailContainer,
  PurchaseBalance,
  PurchaseBalanceValue,
  PurchaseIcon,
  PurchaseType,
  PurchaseDetails,
  PurchasesContainer,
  PurchaseBalanceContainer,
  PurchaseDetailsContainer,
  PurchaseIconContainer
} from './styles'

import chevronRight from '../../../../../assets/chevron-right.png'

export default function Purchases() {
  const { purchases, formatDate } = usePurchases()
  return (
    <PurchasesContainer>
      {purchases.map((purchase) => (
        <PurchaseContainer key={purchase.key}>
          <PurchaseHeader>
            <PurchaseData>{formatDate(purchase.data)}</PurchaseData>
            <PurchaseBalanceContainer>
              <PurchaseBalance>{purchase.BalanceInfo}</PurchaseBalance>
              <PurchaseBalanceValue balanceColor="black">
                R$ 0,00
              </PurchaseBalanceValue>
            </PurchaseBalanceContainer>
          </PurchaseHeader>
          <PurchaseInfo>
            <PurchaseIconContainer>
              <PurchaseIcon source={purchase.IconPath}></PurchaseIcon>
            </PurchaseIconContainer>
            <PurchaseDetailsContainer>
              <PurchaseType>{purchase.type}</PurchaseType>
              <PurchaseBalanceValue balanceColor={purchase.colorBalance}>
                {purchase.balanceValue}
              </PurchaseBalanceValue>
              <PurchaseDetails>{purchase.details} </PurchaseDetails>
            </PurchaseDetailsContainer>
            <PurchaseInfoDetailContainer>
              <PurchaseIcon source={chevronRight} />
            </PurchaseInfoDetailContainer>
          </PurchaseInfo>
        </PurchaseContainer>
      ))}
    </PurchasesContainer>
  )
}
