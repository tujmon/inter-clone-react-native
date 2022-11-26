import {IconsContainer, IconContainer, Icon, IconImage, IconText} from './styles'

import seguros from '../../../../../assets/seguros.jpg'
import present from '../../../../../assets/present.jpg'
import recharge from '../../../../../assets/recharge.jpg'
import seeAll from '../../../../../assets/see-all.jpg'

export default function Icons() {
  return (
    <IconsContainer>
        <IconContainer>
          <Icon>
            <IconImage source={seguros} />
          </Icon>
          <IconText>Seguros</IconText>
        </IconContainer>
        <IconContainer>
          <Icon>
            <IconImage source={present} />
          </Icon>
          <IconText>Gift Card</IconText>
        </IconContainer>
        <IconContainer>
          <Icon>
            <IconImage source={recharge} />
          </Icon>
          <IconText>Recarga</IconText>
        </IconContainer>
        <IconContainer>
          <Icon>
            <IconImage source={seeAll} />
          </Icon>
          <IconText>Ver todos</IconText>
        </IconContainer>
      </IconsContainer>
  )
}