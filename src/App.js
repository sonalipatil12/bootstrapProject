import logo from './logo.svg';
import './App.css';
import FullLayout from './FullLayout/FullLayout';
import Home from './Home/Home';
import { ThemeProvider } from "styled-components"
import styled from 'styled-components';

const theme = {
  color: {
    pageHeadingLight: "yellow",
    pageHeadingDark: "pink",
    bgLight: "white",
    bgDark: "green",


  }
}
// const Wrapper = styled("section")`
// background-color:${({ theme }) => theme.color.bgDark};

// `
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
