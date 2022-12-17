import React from 'react';
import "./App.css"
import { GlobalProvider, useCustomContext } from './context/GlobalContext';
import Router from './components/Router';
const App = () => {
  return (
    <>
      <GlobalProvider  >
        <Router />
      </GlobalProvider>
    </>

  );
}
export default App;
