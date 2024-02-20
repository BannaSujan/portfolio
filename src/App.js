import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navigationbar from './components/Navigationbar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Experience from './components/Experience';

const Body = styled.div`
  background: linear-gradient(138deg, rgba(25,25,36,1) 0%, rgba(51,51,101,1) 50%, rgba(114,114,164,1) 100%);
  width: 100%;
  height: 100%;
  overflow-x : hidden;
  color: white;
  font-size: 45px
`;



function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navigationbar/>
        <Body>
          <Banner/>
          <Skills/>
          <Experience/>
        </Body>
    </ThemeProvider>
  );
}

export default App;
