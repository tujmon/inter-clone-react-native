import {  Container,
  BackButton,
  BackImage,
  PageName,
  ExportExtractImageContainer,
  ExportExtractImage,} from './styles'
export default function Header() {
  return(
    <Container>
        <BackButton>
          <BackImage source={require("../../../../..//go-back.png")} />
        </BackButton>
        <PageName>Extrato</PageName>
        <ExportExtractImageContainer>
          <ExportExtractImage source={require("../../../../../assets/export.png")} />
        </ExportExtractImageContainer>
    </Container>
  )
}