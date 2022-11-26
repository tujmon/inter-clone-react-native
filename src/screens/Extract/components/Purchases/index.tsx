import {  PurchaseContainer,
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
  PurchaseIconContainer,} from './styles'

  interface Purchase {
    key: number;
    data: Date;
    BalanceInfo: string;
    balanceValue: string;
    colorBalance: string;
    IconPath: NodeRequire;
    type: String;
    details: String;
  }
export default function Purchases() {
  const purchase: Purchase = {
    key: 1,
    data: new Date(),
    BalanceInfo: "Saldo do dia",
    balanceValue: "-R$1500,00",
    colorBalance: "#000",
    IconPath: require("../../../../../assets/increase.png"),
    type: "Aplicaçao",
    details: "Lci Liq 90 Dias Banco Inter Sa",
  };
  const purchases: Array<Purchase> = [
    purchase,
    {
      key: 2,
      data: new Date(),
      BalanceInfo: "Saldo do dia",
      balanceValue: "R$1500,00",
      colorBalance: "#669F72",
      IconPath: require("../../../../../assets/pix-black.png"),
      type: "Pix recebido",
      details: "Lci Liq 90 Dias Banco Inter Sa",
    },
  ];
  function formatDate(value: Date) {
    var days = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
    var months = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dec'];
    var month = months[value.getMonth()];
    var day = days[value.getDay()]
    return `${day}, ${value.getDate()} ${month} ${value.getFullYear()}`
  }
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
                <PurchaseIcon
                  source={require("../../../../../assets/chevron-right.png")}
                />
              </PurchaseInfoDetailContainer>
            </PurchaseInfo>
          </PurchaseContainer>
        ))}
      </PurchasesContainer>
  )
}