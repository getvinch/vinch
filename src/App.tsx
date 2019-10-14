import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import { FirebaseProvider } from './components/Firebase';
import { firebaseConfig } from './constants';
import './App.css';
import Boards from './components/Boards';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <FirebaseProvider config={firebaseConfig}>
        <Header />
        <Boards />
      </FirebaseProvider>
    </>
  );
};

export default App;
