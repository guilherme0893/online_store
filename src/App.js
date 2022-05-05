import React, { useEffect } from 'react';
import './App.css';
import Routes from './routes/Routes';
import GlobalProvider from './Context/GlobalProvider';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = 'rgba(85,85,85,.2)';
  });

  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}

export default App;
