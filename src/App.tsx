import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import './styles/colors.scss';
import { HomePage } from './pages/HomePage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ContactPage } from './pages/Contact';
import { Header } from './components/Header';

const theme = createTheme({
  palette: {
    primary: {
      main: '#663997'
    }
  }
});

//need to implement a router
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
