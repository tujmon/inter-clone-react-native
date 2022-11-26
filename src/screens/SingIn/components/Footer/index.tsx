import {FooterContainer, ISafeContainer, LockImage, ISafeText, CreateAccount} from './styles'
import lock from '../../../../../assets/lock.png'

export default function Footer() {
  return(
    <FooterContainer>
        <ISafeContainer>
           <LockImage source={lock}/>
          <ISafeText>
            ISafe
          </ISafeText>
        </ISafeContainer>
        <CreateAccount>Trocar ou abrir conta</CreateAccount>
      </FooterContainer>
  )
}