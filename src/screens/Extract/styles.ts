import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  align-self: center;
  width: 90%;
`
export const BackButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`

export const BackImage = styled.Image`
  height: 100%;
  width: 100%;
`
export const PageName = styled.Text`
  font-weight: bold;
  font-size: 18px;
`
export const ExportExtractImageContainer = styled.View`
  width: 30px;
  height: 30px;
`
export const ExportExtractImage = styled.Image`
  height: 100%;
  width: 100%;
`
export const IconsContainer = styled.View`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  align-self: center;
  width: 90%;
`;


export const Icon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.light};
`;
export const IconImage = styled.Image`
  width: 50%;
  height: 50%;
`;
export const IconContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconText = styled.Text`
  margin-top: 5px;
  font-size: 10px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  margin-top: 20px;
  display: flex;
  margin-bottom: 15px;
  align-self: center;
  width: 90%;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 10px;
`
export const BalanceTitle = styled.Text`
  font-weight: bold;
  margin-bottom: 10px;
`
export const BalanceText = styled.Text`
  font-size: 12px;
  font-weight: 300;
  color: #555;
`

export const BalanceTextHide = styled.View`
  background: #ccc;
  border-radius: 7px;
  width: 80px;
  height: 31px;
`;

export const BalanceValue = styled.Text`
  font-weight: bold;
  font-size: 18px;
`

export const BalanceContent = styled.View`
  display: flex;
`
export const EyeButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`
export const EyeIcon = styled.Image`
  align-self: flex-start;
  width:100%;
  height: 100%;
`

export const FiltersContainer = styled.View`
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 30px;
`
export const FilterContainer = styled.View`
  border: 1px solid #ccc;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Filter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
`
export const FilterText = styled.Text`
  font-size: 12px;
`

export const FilterImageContainer = styled.View`
  width: 20px;
  height: 20px;
`
export const FilterImage = styled.Image`
  width: 100%;
  height: 100%;
`
export const FilterName = styled.Text`
  font-size: 12px;
`
export const SearchImage = styled.Image`
  width: 100%;
  height: 100%;
`
export const PurchasesContainer = styled.View`
  margin-top: 15px;
  display: flex;
  width: 90%;
  align-self: center;
`
export const PurchaseContainer = styled.View`
  margin-bottom: 30px;
  width: 100%;
  height: 110px;
`
export const PurchaseHeader = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: #ccc;
  height: 30px;
  border-bottom-width: 1px;
  margin-bottom: 20px;
`
export const PurchaseData = styled.Text`
  font-size: 12px;
`
export const PurchaseInfo = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 70px;
  justify-content: space-around;
  align-items: center;
`
export const PurchaseIconContainer = styled.View`
  margin-top: 10px;
  align-self: flex-start;
  width: 30px;
  height: 30px;
`
export const PurchaseInfoDetailContainer= styled.View`
  width: 30px;
  height: 30px;
`
export const PurchaseDetailsContainer = styled.View`
  margin-right: 15px;
`
export const PurchaseBalanceContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`
export const PurchaseBalance = styled.Text`
  margin-right: 5px;
  font-size: 12px;
`
export const PurchaseBalanceValue = styled.Text<{balanceColor: string}>`
  color: ${({balanceColor}) => balanceColor};
  font-weight: bold;
`

export const PurchaseIcon = styled.Image`
  width: 100%;
  height: 100%;
`
export const PurchaseType = styled.Text`
  font-weight: bold;
`
export const PurchaseDetails = styled.Text``

export const Month = styled.Text`
  margin-top: 40px;
  font-weight: bold;
  font-size: 16px;
  margin-left: 20px;
`