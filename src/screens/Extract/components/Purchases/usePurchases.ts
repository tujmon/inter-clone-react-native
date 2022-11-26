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
function usePurchases() {
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
  return {purchases, formatDate}
}