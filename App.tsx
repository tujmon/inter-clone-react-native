import { ThemeProvider } from 'styled-components/native';
import { SingIn } from './src/screens/SingIn';
import theme from './src/global/styles/theme'
import {Routes} from './src/routes'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}