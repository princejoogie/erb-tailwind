import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-800">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl text-white">Hello World</h1>
        <div className="text-3xl animate-spin">🌎</div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
