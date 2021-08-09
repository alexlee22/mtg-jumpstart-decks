import React from 'react';
import { StateProvider, initialState, reducer } from "./store/store.js";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header.js';
import Popup from './components/Popup.js';
import Content from './components/Content.js';
import Navigation from './components/Navigation.js';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#000000'
    }
  }
})

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Content />
          <Popup />
          <Navigation />
        </div>
      </MuiThemeProvider>
    </StateProvider>
  );
}

export default App;