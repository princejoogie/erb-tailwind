import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';

const Hello = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center bg-black justify-center text-white">
      <h1 className="text-3xl text-white">Hello World</h1>
      <a
        href="https://github.com/princejoogie"
        target="_blank"
        rel="noreferrer"
      >
        princejoogie
      </a>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
