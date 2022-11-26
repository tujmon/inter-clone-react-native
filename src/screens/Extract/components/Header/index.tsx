import {  Container,
  BackButton,
  BackImage,
  PageName,
  ExportExtractImageContainer,
  ExportExtractImage,} from './styles'

import goBack from "../../../../../go-back.png"
import imageExport from "../../../../../assets/export.png"

export default function Header() {
  return(
    <Container>
        <BackButton>
          <BackImage source={goBack} />
        </BackButton>
        <PageName>Extrato</PageName>
        <ExportExtractImageContainer>
          <ExportExtractImage source={imageExport} />
        </ExportExtractImageContainer>
    </Container>
  )
}