import { Container, TipsImage } from './styles'

import tips from '../../../assets/tips.png'

import Footer from './components/Footer'
import Logo from './components/Logo'
import Cards from './components/Cards'

export function SingIn() {
  return (
    <Container>
      <TipsImage source={tips} />
      <Logo />
      <Cards />
      <Footer />
    </Container>
  )
}
