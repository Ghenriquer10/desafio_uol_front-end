import React from 'react';
import { Header } from './components/Header';
import { Home } from './Pages/Home';
import GlobalStyle from './styles/global'


function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Home/>
    </>
  );
}

export default App;
