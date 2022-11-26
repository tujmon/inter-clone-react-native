import {IconsContainer, IconContainer, Icon, IconImage, IconText} from './styles'
export default function Icons() {
  return (
    <IconsContainer>
        <IconContainer>
          <Icon>
            <IconImage source={require("../../../assets/seguros.png")} />
          </Icon>
          <IconText>Seguros</IconText>
        </IconContainer>
        <IconContainer>
          <Icon>
            <IconImage source={require("../../../assets/present.png")} />
          </Icon>
          <IconText>Gift Card</IconText>
        </IconContainer>
        <IconContainer>
          <Icon>
            <IconImage source={require("../../../assets/recharge.png")} />
          </Icon>
          <IconText>Recarga</IconText>
        </IconContainer>
        <IconContainer>
          <Icon>
            <IconImage source={require("../../../assets/see-all.png")} />
          </Icon>
          <IconText>Ver todos</IconText>
        </IconContainer>
      </IconsContainer>
  )
}