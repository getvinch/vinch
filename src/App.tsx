import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import { FirebaseProvider } from './components/Firebase';
import { firebaseConfig } from './constants';
import './App.css';
import Boards from './components/Boards';
import Board from './components/Board';
import ErrorPage from './components/ErrorPage';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <FirebaseProvider config={firebaseConfig}>
        <Router>
          <Header />
          <Route exact path="/" component={Boards} />
          <Route exact path="/boards/:boardId" component={Board} />
          <Route exact path="/error" component={ErrorPage} />
        </Router>
      </FirebaseProvider>
    </>
  );
};

export default App;
