import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import TicaTacToe from './components/TicaTacToe';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={TicaTacToe} />
      </Switch>
    </Router>
  );
};

export default App;
