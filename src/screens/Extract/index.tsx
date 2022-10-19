import {
  Container,
  IconsContainer,
  IconContainer,
  Icon,
  IconImage,
  IconText,
  Header,
  BackButton,
  BackImage,
  PageName,
  ExportExtractImageContainer,
  ExportExtractImage,
  BalanceContainer,
  BalanceTitle,
  BalanceText,
  BalanceTextHide,
  BalanceValue,
  BalanceContent,
  EyeIcon,
  EyeButton,
  FiltersContainer,
  FilterContainer,
  Filter,
  FilterText,
  FilterImage,
  FilterImageContainer,
  FilterName,
  SearchImage,
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
  PurchaseIconContainer,
  Month
} from "./styles";
import { useState } from "react";
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
export function Extract() {
  const [showBalance, setShowBalance] = useState(false);
  const a: Purchase = {
    key: 1,
    data: new Date(),
    BalanceInfo: "Saldo do dia",
    balanceValue: "-R$1500,00",
    colorBalance: "#000",
    IconPath: require("../../../assets/increase.png"),
    type: "Aplicacao",
    details: "Lci Liq 90 Dias Banco Inter Sa",
  };
  const purchases: Array<Purchase> = [
    a,
    {
      key: 2,
      data: new Date(),
      BalanceInfo: "Saldo do dia",
      balanceValue: "R$1500,00",
      colorBalance: "#669F72",
      IconPath: require("../../../assets/pix-black.png"),
      type: "Pix recebido",
      details: "Lci Liq 90 Dias Banco Inter Sa",
    },
  ];
  function formatDate(value: Date) {
    var days = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
    var months = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var month = months[value.getMonth()];
    var day = days[value.getDay()]
    return `${day}, ${value.getDate()} ${month} ${value.getFullYear()}`
  }
  return (
    <Container>
      <Header>
        <BackButton>
          <BackImage source={require("../../../assets/go-back.png")} />
        </BackButton>
        <PageName>Extrato</PageName>
        <ExportExtractImageContainer>
          <ExportExtractImage source={require("../../../assets/export.png")} />
        </ExportExtractImageContainer>
      </Header>
      <IconsContainer>
        <IconContainer>
          <Icon>
            <IconImage source={require("../../../assets/scan.png")} />
          </Icon>
          <IconText>Pagar</IconText>
        </IconContainer>
        <IconContainer>
          <Icon>
            <IconImage source={require("../../../assets/receive.png")} />
          </Icon>
          <IconText>Receber</IconText>
        </IconContainer>
        <IconContainer>
          <Icon>
            <IconImage source={require("../../../assets/increase-orange.png")} />
          </Icon>
          <IconText>Investir</IconText>
        </IconContainer>
        <IconContainer>
          <Icon>
            <IconImage source={require("../../../assets/cart.png")} />
          </Icon>
          <IconText>Comprar</IconText>
        </IconContainer>
        <IconContainer>
          <Icon>
            <IconImage source={require("../../../assets/smartphone.png")} />
          </Icon>
          <IconText>Recarga</IconText>
        </IconContainer>
      </IconsContainer>
      <BalanceContainer>
        <BalanceContent>
          <BalanceTitle>Saldo disponivel</BalanceTitle>
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
                ? require("../../../assets/open-eye.png")
                : require("../../../assets/closed-eye.png")
            }
          />
        </EyeButton>
      </BalanceContainer>
      <FiltersContainer>
        <FilterContainer>
          <Filter>
            <FilterImageContainer>
              <SearchImage
                source={require("../../../assets/search-black.png")}
              />
            </FilterImageContainer>
          </Filter>
        </FilterContainer>
        <FilterContainer>
          <Filter>
            <FilterName>Datas</FilterName>
            <FilterImageContainer>
              <FilterImage
                source={require("../../../assets/chevron-black-down.png")}
              />
            </FilterImageContainer>
          </Filter>
        </FilterContainer>
        <FilterContainer>
          <Filter>
            <FilterName>Tipos</FilterName>
            <FilterImageContainer>
              <FilterImage
                source={require("../../../assets/chevron-black-down.png")}
              />
            </FilterImageContainer>
          </Filter>
        </FilterContainer>
        <FilterContainer>
          <Filter>
            <FilterName>Lancamentos</FilterName>
            <FilterImageContainer>
              <FilterImage
                source={require("../../../assets/chevron-black-down.png")}
              />
            </FilterImageContainer>
          </Filter>
        </FilterContainer>
      </FiltersContainer>
      <Month>Outubro</Month>
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
                  source={require("../../../assets/chevron-right.png")}
                />
              </PurchaseInfoDetailContainer>
            </PurchaseInfo>
          </PurchaseContainer>
        ))}
      </PurchasesContainer>
    </Container>
  );
}
