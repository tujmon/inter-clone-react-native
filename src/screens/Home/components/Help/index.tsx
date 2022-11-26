import {
  HelpContainer,
  HelpImageContainer,
  HelpImage,
  HelpTextContainer,
  HelpTitle,
  HelpText,
  HelpIcon
} from './styles'

import helpImage from '../../../../../assets/help-image.jpg'
import chevronRight from '../../../../../assets/chevron-right.jpg'

export default function Help() {
  return (
    <HelpContainer>
      <HelpImageContainer>
        <HelpImage source={helpImage} />
      </HelpImageContainer>
      <HelpTextContainer>
        <HelpTitle>Precisa de ajuda?</HelpTitle>
        <HelpText>
          Fale no chat, tire suas duvidas e{'\n'} acompanhe seus chamados
        </HelpText>
      </HelpTextContainer>
      <HelpIcon source={chevronRight} />
    </HelpContainer>
  )
}
