import {  IconsContainer,
  IconContainer,
  Icon,
  IconImage,
  IconText,} from './styles'
export default function Icons () {
  return(
    <IconsContainer>
        <IconContainer>
          <Icon>
            <IconImage source={require("../../../../../assets/scan.png")} />
          </Icon>
          <IconText>Pagar</IconText>
        </IconContainer>
        <IconContainer>
          <Icon>
            <IconImage source={require("../../../../../assets/receive.png")} />
          </Icon>
          <IconText>Receber</IconText>
        </IconContainer>
        <IconContainer>
          <Icon>
            <IconImage source={require("../../../../../assets/increase-orange.png")} />
          </Icon>
          <IconText>Investir</IconText>
        </IconContainer>
        <IconContainer>
          <Icon>
            <IconImage source={require("../../../../../assets/cart.png")} />
          </Icon>
          <IconText>Comprar</IconText>
        </IconContainer>
        <IconContainer>
          <Icon>
            <IconImage source={require("../../../../../assets/smartphone.png")} />
          </Icon>
          <IconText>Recarga</IconText>
        </IconContainer>
      </IconsContainer>
  )
}