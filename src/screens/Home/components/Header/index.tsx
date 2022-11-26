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
  More
} from './styles'

import logo from '../../../../../assets/logo.jpg'
import brazil from '../../../../../assets/brazil.jpg'
import usa from '../../../../../assets/usa.jpg'
import search from '../../../../../assets/search.jpg'
import more from '../../../../../assets/more.jpg'

export default function Header() {
  return (
    <Container>
      <Info>
        <Logo source={logo} />
        <Countries>
          <BrazilContainer>
            <Brazil source={brazil} />
          </BrazilContainer>
          <UsaContainer>
            <Usa source={usa} />
          </UsaContainer>
        </Countries>
      </Info>
      <Options>
        <SearchIcon source={search} />
        <More source={more} />
      </Options>
    </Container>
  )
}
