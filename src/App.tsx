import {ThemeProvider} from "styled-components";
import {darkTheme} from "./styles/theme.ts";
import {GlobalStyle} from "./styles/globalStyle.styled.ts";
import Home from "./pages/Home/Home.tsx";

function App() {
  return (
      <ThemeProvider theme={darkTheme}>
          <Home/>
          <GlobalStyle/>
      </ThemeProvider>
  )
}

export default App
