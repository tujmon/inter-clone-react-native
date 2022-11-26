import {Container, Action, ActionImage, ActionText } from './styles'
type ActionsProps = {
  show: boolean
}
import pix from '../../../../../assets/pix.png';
export default function Actions({show}:ActionsProps) {
  return (
    <Container>
        <Action>
          <ActionImage source={pix} />
          <ActionText>Pix</ActionText>
        </Action>
        <Action>
          <ActionImage source={pix} />
          <ActionText>Pix</ActionText>
        </Action>
        <Action>
          <ActionImage source={pix} />
          <ActionText>Pix</ActionText>
        </Action>
        {show && (
          <>
            <Action>
              <ActionImage source={pix} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={pix} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={pix} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={pix} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={pix} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={pix} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={pix} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={pix} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={pix} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={pix} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={pix} />
              <ActionText>Pix</ActionText>
            </Action>
            <Action>
              <ActionImage source={pix} />
              <ActionText>Pix</ActionText>
            </Action>
          </>
        )}
      </Container>
  )
}