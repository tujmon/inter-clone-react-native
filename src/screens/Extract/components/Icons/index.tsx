import {
  IconsContainer,
  IconContainer,
  Icon,
  IconImage,
  IconText
} from './styles'

import scan from '../../../../../assets/scan.png'
import receive from '../../../../../assets/receive.png'
import increaseOrange from '../../../../../assets/increase-orange.png'
import cart from '../../../../../assets/cart.png'
import smartphone from '../../../../../assets/smartphone.png'

export default function Icons() {
  return (
    <IconsContainer>
      <IconContainer>
        <Icon>
          <IconImage source={scan} />
        </Icon>
        <IconText>Pagar</IconText>
      </IconContainer>
      <IconContainer>
        <Icon>
          <IconImage source={receive} />
        </Icon>
        <IconText>Receber</IconText>
      </IconContainer>
      <IconContainer>
        <Icon>
          <IconImage source={increaseOrange} />
        </Icon>
        <IconText>Investir</IconText>
      </IconContainer>
      <IconContainer>
        <Icon>
          <IconImage source={cart} />
        </Icon>
        <IconText>Comprar</IconText>
      </IconContainer>
      <IconContainer>
        <Icon>
          <IconImage source={smartphone} />
        </Icon>
        <IconText>Recarga</IconText>
      </IconContainer>
    </IconsContainer>
  )
}
