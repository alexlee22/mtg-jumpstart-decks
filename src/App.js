import React from 'react';
import { StateProvider, initialState, reducer } from "./store/store.js";
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header.js';
//import Popup from './components/Popup.js';
import Content from './components/Content.js';
import Navigation from './components/Navigation.js';
import purple from '@material-ui/core/colors/purple';
import ModalWrapper from './components/ModalWrapper.js';
import Modal from './components/Modal';

const theme = createTheme({
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
          <Navigation />
          <ModalWrapper>
            <Modal />
          </ModalWrapper>
        </div>
      </MuiThemeProvider>
    </StateProvider>
  );
}

export default App;

//<Popup />
          