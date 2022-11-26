import { useState } from 'react'
import {
  Container,
  Title,
  Text,
  TextHide,
  Value,
  Content,
  EyeIcon,
  EyeButton
} from './styles'

import openEye from '../../../../../assets/open-eye.png'
import closedEye from '../../../../../assets/closed-eye.png'

export default function Balance() {
  const [show, setShow] = useState(false)
  return (
    <Container>
      <Content>
        <Title>Saldo disponível</Title>
        <Text>Total em conta</Text>
        {show ? <Value>R$0,00</Value> : <TextHide />}
      </Content>
      <EyeButton onPress={() => setShow((prevState) => !prevState)}>
        <EyeIcon source={show ? openEye : closedEye} />
      </EyeButton>
    </Container>
  )
}
