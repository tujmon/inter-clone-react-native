import {
  Container,
  Logo,
  Countries,
  BrazilContainer,
  Brazil,
  UsaContainer,
  Usa,
  Info,
  Options,
  SearchIcon,
  More,
} from "./styles";
export default function Header() {
  return (
    <Container>
      <Info>
        <Logo source={require("../../../assets/logo.png")} />
        <Countries>
          <BrazilContainer>
            <Brazil source={require("../../../assets/brazil.png")} />
          </BrazilContainer>
          <UsaContainer>
            <Usa source={require("../../../assets/usa.png")} />
          </UsaContainer>
        </Countries>
      </Info>
      <Options>
        <SearchIcon source={require("../../../assets/search.png")} />
        <More source={require("../../../assets/more.png")} />
      </Options>
    </Container>
  );
}