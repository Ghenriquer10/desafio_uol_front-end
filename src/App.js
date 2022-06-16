import React from 'react';
import MyRoutes from './Routes/routes';
import GlobalStyle from './styles/global'
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import DataProvider from './contexts/datas';


function App() {
  return (
    <>
      <DataProvider>
        <GlobalStyle/>
        <ToastContainer autoClose={1000} draggable={false} transition={Zoom}/>
        <MyRoutes/>
      </DataProvider>
    </>
  );
}

export default App;
