import {LogoContainer, LogoImage} from './styles'

import logo from '../../../../../assets/logo.png'

export default function Logo() {
  return(
    <LogoContainer>
        <LogoImage 
          source={logo}
        />
      </LogoContainer>
  )
}