import React from 'react';
import MyRoutes from './Routes/routes';
import GlobalStyle from './styles/global'
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <>
      <GlobalStyle/>
      <ToastContainer autoClose={3000} draggable={false} transition={Zoom}/>
      <MyRoutes/>
    </>
  );
}

export default App;
